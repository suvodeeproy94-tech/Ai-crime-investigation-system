// This page allows police and admin users to upload evidence files for a case.
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function EvidenceUpload() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [caseId, setCaseId] = useState('')
  const [suspectId, setSuspectId] = useState('')
  const [file, setFile] = useState(null)
  const [cases, setCases] = useState([])
  const [suspects, setSuspects] = useState([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [casesRes, suspectsRes] = await Promise.all([
          API.get('/cases'),
          API.get('/suspects')
        ])
        setCases(casesRes.data)
        setSuspects(suspectsRes.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchOptions()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!title || !caseId || !file) {
      setMessage('Please provide a title, case selection, and evidence file.')
      return
    }

    setLoading(true)
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('caseId', caseId)
    if (suspectId) formData.append('suspectId', suspectId)
    formData.append('file', file)

    try {
      await API.post('/evidence', formData)
      setMessage('Evidence uploaded successfully.')
      setTitle('')
      setDescription('')
      setSuspectId('')
      setFile(null)
      navigate('/dashboard')
    } catch (error) {
      setMessage(error.response?.data?.message || 'Upload failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-panel">
        <Navbar title="Upload Evidence" />
        <section className="content-section">
          <div className="section-header">
            <div>
              <p className="eyebrow">For Investigations</p>
              <h2>Evidence Upload</h2>
            </div>
          </div>
          <form className="form-card" onSubmit={handleSubmit}>
            {message && <div className="form-message">{message}</div>}
            <label>
              Title
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Evidence title" />
            </label>
            <label>
              Description
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the evidence" />
            </label>
            <label>
              Case
              <select value={caseId} onChange={(e) => setCaseId(e.target.value)}>
                <option value="">Select case</option>
                {cases.map((item) => (
                  <option key={item._id} value={item._id}>{item.title}</option>
                ))}
              </select>
            </label>
            <label>
              Suspect (optional)
              <select value={suspectId} onChange={(e) => setSuspectId(e.target.value)}>
                <option value="">Select suspect</option>
                {suspects.map((item) => (
                  <option key={item._id} value={item._id}>{item.name}</option>
                ))}
              </select>
            </label>
            <label>
              File
              <input type="file" onChange={(e) => setFile(e.target.files[0])} accept="image/*,application/pdf,video/*" />
            </label>
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? 'Uploading…' : 'Upload Evidence'}
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default EvidenceUpload
