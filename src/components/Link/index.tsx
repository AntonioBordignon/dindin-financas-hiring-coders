import React from "react";
import { Link as LinkRoute } from "react-router-dom";
import "./styles.css";

interface LinkProps { 
    texto: string;
    redirect: string;
}

export default function Link(props: LinkProps) {
    return (
        <LinkRoute className="links-menu" to={props.redirect}>
            {props.texto}
        </LinkRoute>
    );
}