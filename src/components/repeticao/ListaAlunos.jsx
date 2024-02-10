import React from "react";
import alunos from '../../data/alunos'

export default (props) => {
    const li1 = <li>
        {alunos[0].id} {alunos[0].id} - {alunos[0].nota}
        </li>
    return (
        <div>
            <ul>
                <li>Ana - 9.7</li>
                <li>Mirella - 6.5</li>
                <li>Daniel - 7.2</li>
            </ul>
        </div>

    );
}