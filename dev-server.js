const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url).pathname
        const path = url === "/" ? "/index.html" : url
        try {
            const file = Bun.file(`pages${path}`)
            return new Response(file)
        } catch {
            return new Response("Arquivo não encontrado", { status: 404 })
        }
    }
})

console.log("🌸 Servindo arquivos em http://localhost:3000")