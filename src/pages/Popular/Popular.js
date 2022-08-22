import * as React from "react";
import { useSearchParams } from "react-router-dom";
import {useState,useEffect} from "react";
import {fetchPopularRepos} from "../../api";
import SelectLanguages from "./SelectLanguages";
import Repos from "./Repos";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import SortBySelect from "./SortBySelect";


function Popular(){
    const [selectedLanguage, setSelectedLanguages]= useState('All');
    const [searchParams, setSearchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [sort, setSort] = useState('starts');


    useEffect(()=>{
        setLoading(true);


        fetchPopularRepos(selectedLanguage,sort)
            .then(data => {
                //console.log(`1)${selectedLanguage}<br>2)${sort}`);
                setRepos(data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                setErrorMessage(true);
            })
    },[]);

    let languageItem = searchParams.get('language');
    let sortBy = searchParams.get('sortBy');

    const selectLanguage = (language, sort)=> {

        setSelectedLanguages(language);

        setLoading(true);

         if(sort){
             setSearchParams({ language: language, sortBy: sort });
    }



        fetchPopularRepos(language,sort)
            .then(data => {
                setRepos(data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                setErrorMessage(true);
                console.log(error);
            });

    }



    const selectSortBy = (elem)=>{
        setSort(elem);

        if(languageItem ){
            setSearchParams({ language: languageItem, sortBy: elem });
                }else {
            setSearchParams({ language: selectedLanguage, sortBy: elem });
        }


    }



    useEffect(() => {

        const currentParams = Object.fromEntries([...searchParams]);
      if(currentParams.language && currentParams.sortBy){
          selectLanguage(currentParams.language,currentParams.sortBy);
      }

    }, [searchParams]);

    //console.log(`3)${selectedLanguage}<br>4)${sort}`);

    return(

        <>
            <SelectLanguages
                selectedLanguage={selectedLanguage}
                selectLanguage={selectLanguage}
                sortItem={sortBy ? sortBy : sort}

            />

            {loading ? <Loading /> : null}
            {errorMessage ? <ErrorMessage /> : null}
            <SortBySelect
                selectSortBy={selectSortBy}
                sortBy={sortBy}
            />
            <Repos
            repos={repos}

            />
        </>

    )
}
export default  Popular;