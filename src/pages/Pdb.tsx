export default function Pdb({texto}:any) {

    const taCarregano = true

    return(
        <div>
            { taCarregano ? <h1>ta carregano {texto} </h1> : <h1>BIXO DE PAI {texto} </h1>}
        </div>
    )
}