import {memo} from "react";

const SelectLanguages= memo((props)=>{
        const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];


return(

        <ul className='languages'>
            {languages.map((language,index)=>{
                return(
                    <li
                        style={language === props.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={()=>props.selectLanguage(language,props.sortItem)}
                        key={index}>
                        {language}

                    </li>
                )
            })}
        </ul>

)
},(prevProps,nextProps)=>{
return prevProps.selectedLanguage === nextProps.selectedLanguage;
});
export default SelectLanguages;