// Import Assets
import shop from '../assets/Shop.jpeg';
import vote from '../assets/Vote.jpeg';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Shop</h3>
                    <img src={shop} alt="Shop" />
                    <p>This project is about a shop, where a seller can sign up by paying 5 ether and add his product as much as he want.
                    </p>

                    <a href="https://github.com/maxinejng/shop" target="_blank" className="button">Github code</a>
                </div>

                <div className="projects__card">
                    <h3>Election</h3>
                    <img src={vote} alt="Election" />
                    <p>This project is about an election, where only the owner can add candidates that is represented by their party and everyone can vote.
                    </p>

                    <a href="https://github.com/maxinejng/elector_project/blob/main/contracts/Election.sol" target="_blank" className="button">Github code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;