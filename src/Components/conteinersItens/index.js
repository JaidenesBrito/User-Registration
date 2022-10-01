import React from "react";

import { ConteinerItens as Conteiner } from "./styles"

function ConteinerItens({ children, isBlur }) {

    return <Conteiner isBlur={isBlur}>{children}</Conteiner>

}

export default ConteinerItens