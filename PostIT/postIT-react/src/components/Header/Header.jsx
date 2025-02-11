import React, {useState} from "react";
import TitleButton from "../Buttons/TitleButton";
import './Header.css'

const Header = () => {
    // Estats del component
    const [showMenu, setShowMenu] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleMenu = () => {
        setShowMenu(!showMenu); // alterna el mostrar o ocultar el menu
    }

    // Control de la entrada de dades del menu per omplir el post
    const handleMenuSubmit = (e) => {
        e.preventDefault();

        if (title.trim() && description.trim()) {
            createPost(title, description);
            setTitle('');
            setDescription('');
            setShowMenu(false);
        }
    }

    // Creacio del Post utilitzan appendChild i Remove
    const createPost = (title, description) => {
        const post = document.createElement('div');
        post.className = 'post';

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;
        post.appendChild(postTitle);

        const postDescription = document.createElement('p');
        postDescription.textContent = description;
        post.appendChild(postDescription);

        const deletePostButton = document.createElement('button');
        deletePostButton.className = 'delete-post-button';
        deletePostButton.textContent = 'Borrar';
        deletePostButton.onclick = () => {
            post.classList.add('deleting-animation');
            setTimeout(() => post.remove(), 300);
        }
        post.appendChild(deletePostButton);

        const postList = document.getElementById('post-list');
        postList.appendChild(post);
    }
    

    return (
        <div>

            <div className="header-container">
                <h1 className="header-title">Post IT</h1>
                <TitleButton onclick={handleMenu}>Afegir Post</TitleButton>
            </div>

            {showMenu && (
                <form className="post-menu" onSubmit={handleMenuSubmit}>
                    <input 
                        type="text"
                        placeholder="Afegeix un titol"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Descripció del post (300 caracters maxim)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={300}
                        required
                    />

                    <button type="submit">Crear Post</button>
                </form>
            )}

            <div id="post-list"></div> {}
        </div> 
    )
};

export default Header;