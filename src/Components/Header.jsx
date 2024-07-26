import "./header.css";
// const Header = () => {
//     return (
//         <h1>Sanjeev Kumar Yadav</h1>
//     )
// }

function Header () {
    return (
        <div className="header">
        <h1>Sanjeev Kumar Yadav</h1>
        <p>Application Support Engineer</p>
        </div>
    )
}


export default Header;

/*
Another way to export the function into App.js
export {Header};
export default Header;
export {Footer};
export default Footer;
*/