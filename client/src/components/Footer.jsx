import React from "react";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className="container border-t mx-auto">
            <footer className="text-white text-center text-sm py-4">
                <p>Tous droits réservés &copy; {date}</p>
                <p>JOACHIM Cherley</p>
            </footer>
        </div>
    );
};

export default Footer;
