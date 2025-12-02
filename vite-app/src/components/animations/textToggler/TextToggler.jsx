import './TextToggler.css'

function TextToggler({ words }) {
    return (
        <div id='container'>
            <div id='flip'>
                <div><div>{words[0]}</div></div>
                <div><div>{words[1]}</div></div>
                <div><div>{words[2]}</div></div>
            </div>
        </div>
    );
}

export default TextToggler;
