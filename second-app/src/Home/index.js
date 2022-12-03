import "./style.css";
import Box from "../Box";
import Contact from "../Contact";

function Home() {
    return (
        <>
            <header>
                <h1>Welcome Home Page</h1>
            </header>
            <main>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </main>
            <footer>
                <Contact></Contact>
                <h2>Good Bye</h2>
            </footer>
        </>
    )
}

export default Home;