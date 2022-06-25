import "./styles.css";

interface LinkProps { 
    texto: string;
    redirect: String;
}

export default function Link(props: LinkProps) {
    return (
        <a href= "/contato" target= "_black">
            {props.texto}
        </a>
    );
}