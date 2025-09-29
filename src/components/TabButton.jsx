export default function TabButton({label, onClick, isClicked}) {
    return ( 
    <li><button className = {isClicked ? 'active' : undefined} onClick = {onClick}>{label}</button></li>
    )
}