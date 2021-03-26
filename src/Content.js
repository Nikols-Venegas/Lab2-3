import Part from './Part.js'
const Content = (props) => {
    return(
       <div>
        <Part parte={props.part1} ejercicios={props.exercises1} />
        <Part parte={props.part2} ejercicios={props.exercises2} />
        <Part parte={props.part3} ejercicios={props.exercises3} />
       </div>
    )
}

export default Content

