// This file makes a simple 3D coin style rotating logo with Three.js.
// It uses the uploaded logo image on the front and back side of the coin.
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// This component shows the uploaded logo as a 3D rotating coin.
function RotatingLogo3D() {
    // This ref gives us the div where Three.js will place the canvas.
    const logoBoxRef = useRef(null)

    // This effect starts the 3D logo after the component appears on the page.
    useEffect(() => {
        // This line gets the div from the page.
        const logoBox = logoBoxRef.current

        // This check stops the code if the div is not ready yet.
        if (!logoBox) {
            return
        }

        // This line stores the animation id so we can stop it later.
        let animationId = 0

        // This line tells us if the component is still on the page.
        let isComponentActive = true

        // This line stores the full coin after it is created.
        let logoCoin = null

        // This array stores all coin parts so cleanup stays easy.
        const coinParts = []

        // This line stores the logo texture so it can be cleaned later.
        let savedLogoTexture = null

        // This part creates the 3D scene.
        const scene = new THREE.Scene()

        // This part creates a camera that can see the logo.
        const camera = new THREE.PerspectiveCamera(
            35, // This number controls how wide the camera view is.
            1, // This value is changed later when the canvas size is known.
            0.1, // This is the closest distance the camera can see.
            100 // This is the farthest distance the camera can see.
        )

        // This line moves the camera away from the logo coin.
        camera.position.z = 6.8

        // This part creates the WebGL renderer that draws the 3D logo.
        const renderer = new THREE.WebGLRenderer({
            alpha: true, // This keeps the canvas background transparent.
            antialias: true // This makes the edges look smoother.
        })

        // This line reads the screen quality.
        const screenQuality = window.devicePixelRatio

        // This line keeps the canvas clear without making it too heavy.
        const canvasQuality = Math.min(screenQuality, 2)

        // This line makes the logo look clear on high quality screens.
        renderer.setPixelRatio(canvasQuality)

        // This line adds the Three.js canvas inside our div.
        logoBox.appendChild(renderer.domElement)

        // This light gives soft light to the full coin.
        const softLight = new THREE.AmbientLight(0xffffff, 1.2)

        // This line adds the soft light to the scene.
        scene.add(softLight)

        // This light creates a small shine on the coin edge.
        const shineLight = new THREE.DirectionalLight(0xffffff, 1.8)

        // This line places the shine light above and in front of the coin.
        shineLight.position.set(2, 3, 5)

        // This line adds the shine light to the scene.
        scene.add(shineLight)

        // This blue light makes the side of the coin easier to see.
        const sideLight = new THREE.DirectionalLight(0x60a5fa, 1.1)

        // This line places the blue light on the side of the coin.
        sideLight.position.set(-4, 1, 3)

        // This line adds the blue side light to the scene.
        scene.add(sideLight)

        // This function keeps the canvas size equal to the visible box.
        function resizeLogo() {
            // This line reads the current box width.
            const boxWidth = logoBox.clientWidth

            // This line reads the current box height.
            const boxHeight = logoBox.clientHeight

            // This check prevents wrong canvas size when the page is loading.
            if (boxWidth === 0 || boxHeight === 0) {
                return
            }

            // This line updates the renderer size.
            renderer.setSize(boxWidth, boxHeight)

            // This line updates the camera shape for the new size.
            camera.aspect = boxWidth / boxHeight

            // This line tells Three.js that the camera changed.
            camera.updateProjectionMatrix()
        }

        // This function draws every frame and rotates the logo like a coin.
        function rotateLogo() {
            // This line asks the browser to run this function again.
            animationId = window.requestAnimationFrame(rotateLogo)

            // This check runs only after the logo coin is ready.
            if (logoCoin) {
                // This line rotates the coin around the vertical side.
                logoCoin.rotation.y = logoCoin.rotation.y + 0.024

                // This line makes a small natural coin tilt.
                const smallTilt = Math.sin(Date.now() * 0.0012) * 0.08

                // This line applies the small tilt while the coin spins.
                logoCoin.rotation.x = smallTilt
            }

            // This line draws the scene using the camera.
            renderer.render(scene, camera)
        }

        // This part loads the uploaded logo picture.
        const textureLoader = new THREE.TextureLoader()

        // This line starts loading the logo image from the public folder.
        textureLoader.load('/logos/uploaded-crime-logo.png', (logoTexture) => {
            // This check stops the image from being added after the page changes.
            if (!isComponentActive) {
                logoTexture.dispose()
                return
            }

            // This line keeps the image colors natural.
            logoTexture.colorSpace = THREE.SRGBColorSpace

            // This line saves the texture so cleanup can remove it later.
            savedLogoTexture = logoTexture

            // This material is used behind the logo picture.
            const coinFaceMaterial = new THREE.MeshStandardMaterial({
                color: 0xf8fafc, // This line gives the coin face a clean light color.
                metalness: 0.2, // This line adds a small metal feel.
                roughness: 0.3 // This line keeps the face shine soft.
            })

            // This material shows the uploaded logo picture on the front.
            const frontLogoMaterial = new THREE.MeshStandardMaterial({
                map: logoTexture, // This line places the image on the front face.
                transparent: true, // This line allows transparent parts of the PNG to show.
                metalness: 0.12, // This line gives the picture a light shine.
                roughness: 0.28 // This line keeps the picture clear.
            })

            // This material shows the same uploaded logo picture on the back.
            const backLogoMaterial = new THREE.MeshStandardMaterial({
                map: logoTexture, // This line places the image on the back face.
                transparent: true, // This line allows transparent parts of the PNG to show.
                metalness: 0.12, // This line gives the picture a light shine.
                roughness: 0.28 // This line keeps the picture clear.
            })

            // This material is used for the thick coin side.
            const coinSideMaterial = new THREE.MeshStandardMaterial({
                color: 0x102a4c, // This line makes the coin side dark blue.
                metalness: 0.85, // This line makes the side look metallic.
                roughness: 0.22, // This line keeps the side slightly shiny.
                emissive: 0x123d78, // This line adds a small blue glow.
                emissiveIntensity: 0.18 // This line controls the glow strength.
            })

            // This material is used for the raised coin rings.
            const coinRingMaterial = new THREE.MeshStandardMaterial({
                color: 0x7dd3fc, // This line gives the ring a bright blue color.
                metalness: 0.8, // This line makes the ring look like shiny metal.
                roughness: 0.2 // This line keeps the ring shine smooth.
            })

            // This group keeps all coin pieces together.
            logoCoin = new THREE.Group()

            // This geometry creates the thick round side of the coin.
            const coinSideShape = new THREE.CylinderGeometry(2.12, 2.12, 0.38, 96, 1, true)

            // This mesh is the visible edge of the coin.
            const coinSide = new THREE.Mesh(coinSideShape, coinSideMaterial)

            // This line turns the cylinder so its thickness points toward the camera.
            coinSide.rotation.x = Math.PI / 2

            // This line adds the side edge to the coin group.
            logoCoin.add(coinSide)

            // This line saves the side edge for cleanup later.
            coinParts.push(coinSide)

            // This geometry creates one flat round face.
            const coinFaceShape = new THREE.CircleGeometry(2.03, 96)

            // This mesh is the light front coin face.
            const frontFace = new THREE.Mesh(coinFaceShape, coinFaceMaterial)

            // This line places the front face on the front of the coin.
            frontFace.position.z = 0.205

            // This line adds the front face to the coin group.
            logoCoin.add(frontFace)

            // This line saves the front face for cleanup later.
            coinParts.push(frontFace)

            // This mesh is the light back coin face.
            const backFace = new THREE.Mesh(coinFaceShape.clone(), coinFaceMaterial.clone())

            // This line places the back face on the back of the coin.
            backFace.position.z = -0.205

            // This line turns the back face outward.
            backFace.rotation.y = Math.PI

            // This line adds the back face to the coin group.
            logoCoin.add(backFace)

            // This line saves the back face for cleanup later.
            coinParts.push(backFace)

            // This mesh shows the uploaded logo on the front face.
            const frontLogo = new THREE.Mesh(coinFaceShape.clone(), frontLogoMaterial)

            // This line places the front logo a little above the front face.
            frontLogo.position.z = 0.215

            // This line adds the front logo to the coin group.
            logoCoin.add(frontLogo)

            // This line saves the front logo for cleanup later.
            coinParts.push(frontLogo)

            // This mesh shows the uploaded logo on the back face.
            const backLogo = new THREE.Mesh(coinFaceShape.clone(), backLogoMaterial)

            // This line places the back logo a little above the back face.
            backLogo.position.z = -0.215

            // This line turns the back logo outward.
            backLogo.rotation.y = Math.PI

            // This line adds the back logo to the coin group.
            logoCoin.add(backLogo)

            // This line saves the back logo for cleanup later.
            coinParts.push(backLogo)

            // This geometry creates a raised round ring near the coin edge.
            const coinRingShape = new THREE.TorusGeometry(2.06, 0.035, 16, 96)

            // This mesh is the raised front ring.
            const frontRing = new THREE.Mesh(coinRingShape, coinRingMaterial)

            // This line places the ring on the front face.
            frontRing.position.z = 0.235

            // This line adds the front ring to the coin group.
            logoCoin.add(frontRing)

            // This line saves the front ring for cleanup later.
            coinParts.push(frontRing)

            // This mesh is the raised back ring.
            const backRing = new THREE.Mesh(coinRingShape.clone(), coinRingMaterial.clone())

            // This line places the ring on the back face.
            backRing.position.z = -0.235

            // This line adds the back ring to the coin group.
            logoCoin.add(backRing)

            // This line saves the back ring for cleanup later.
            coinParts.push(backRing)

            // This line starts the coin with a small side angle.
            logoCoin.rotation.y = -0.35

            // This line makes the coin a good size inside the auth panel.
            logoCoin.scale.set(0.92, 0.92, 0.92)

            // This line adds the full coin into the scene.
            scene.add(logoCoin)
        })

        // This line sets the first canvas size.
        resizeLogo()

        // This line starts the animation loop.
        rotateLogo()

        // This line keeps the logo sized correctly after browser resize.
        window.addEventListener('resize', resizeLogo)

        // This cleanup runs when the component leaves the page.
        return () => {
            // This line marks the component as removed.
            isComponentActive = false

            // This line stops the animation loop.
            window.cancelAnimationFrame(animationId)

            // This line removes the resize listener.
            window.removeEventListener('resize', resizeLogo)

            // This line removes the canvas from the page.
            renderer.domElement.remove()

            // This line frees renderer memory.
            renderer.dispose()

            // This check removes the coin from the scene if it was created.
            if (logoCoin) {
                scene.remove(logoCoin)
            }

            // This loop cleans every saved coin part.
            coinParts.forEach((coinPart) => {
                coinPart.geometry.dispose() // This line frees the shape memory.
                coinPart.material.dispose() // This line frees the material memory.
            })

            // This line clears the saved coin parts list.
            coinParts.length = 0

            // This check cleans the uploaded logo texture.
            if (savedLogoTexture) {
                savedLogoTexture.dispose()
            }
        }
    }, [])

    // This line returns the div where the 3D canvas is placed.
    return (
        <div
            ref={logoBoxRef}
            className="rotating-logo-3d"
            role="img"
            aria-label="AI Crime Investigation 3D rotating logo"
        ></div>
    )
}

// This line makes the component available to other files.
export default RotatingLogo3D
