import {useEffect, useState} from  'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm ({handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => { 

    fetch("http://localhost:5000/categories", {

        method:"GET",
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
        console.log(project)
    }

    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
        console.log(project)
    }


    return(
        <form onSubmit={submit} className={styles.form}>
            
           <Input type="text" placeholder="Insira o nome do projeto" name="name" text="Nome do Projeto" handleOnChange={handleChange} value={project.name ? project.name : ''}/>

           <Input type="number" placeholder="Insira o valor total do projeto" name="budget" text="Orçamento do Projeto"
           handleOnChange={handleChange} value={project.budget ? project.budget : ''}/>

           <Select  name="category_id" options={categories} text="Selecione a categoria"
           handleOnChange={handleCategory}
           value={project.category ? project.category.id : ''}/>
           
            <SubmitButton text={btnText}/>

        </form>
    );
}

export default ProjectForm;