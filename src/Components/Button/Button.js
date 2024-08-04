import "./Button.css";

const Button = () => {
    const navigateTo = useNavigate(); 

    if (!path) {
        return <button className="button" onClick={onClickFn}>
            {text}
        </button>
    } else {
        return (
            <button className="button"
            onClick={() => {
                navigateTo(path);
            }}
            >
            {text}
            </button>
        );
        };
    };

export default Button;