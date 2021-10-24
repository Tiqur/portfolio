import styles from './styles.module.scss';
import { ArrowForwardSvg } from '../../assets/index';
import React, { useState } from 'react';

export const CarouselSection = () => {
  const projects = [
    {
      name: "Project1",
      image: 'image',
      description: "Project1 Description",
      icons: ['scss', 'react', 'js', 'html'],
      github: 'https://github.com',
      website: 'https://google.com', // If this matches website url, render "Demo" button
    },
    {
      name: "Project2",
      image: 'image',
      description: "Project2 Description",
      icons: ['scss', 'react', 'js', 'html'],
      github: 'https://github.com',
      website: 'https://google.com'
    },
    {
      name: "Project2",
      image: 'image',
      description: "Project2 Description",
      icons: ['scss', 'react', 'js', 'html'],
      github: 'https://github.com',
      website: 'https://google.com'
    },
    {
      name: "Project3",
      image: 'image',
      description: "Project3 Description",
      icons: ['scss', 'react', 'js', 'html'],
      github: 'https://github.com',
      website: 'https://google.com'
    },
    {
      name: "Project4",
      image: 'image',
      description: "Project4 Description",
      icons: ['scss', 'react', 'js', 'html'],
      github: 'https://github.com',
      website: 'https://google.com'
    }
  ]


  let [project_index, set_project_index] = useState(0);

  const handle_pagination = (direction: string) => {
    if (direction === 'right') {
      set_project_index(project_index === projects.length-1 ? 0 : project_index + 1);
    } else {
      set_project_index(project_index === 0 ? projects.length-1 : project_index - 1);
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Projects</p>
      <div className={styles.inner_container}>
        <ArrowForwardSvg onClick={() => handle_pagination('left')} className={styles.c_buttonL}/>
        <div className={styles.content} />
        <ArrowForwardSvg onClick={() => handle_pagination('right')} className={styles.c_button}/>
      </div>
      <div className={styles.navigation}>
      </div>
      <div className={styles.pagination}>
        <ArrowForwardSvg onClick={() => handle_pagination('left')} className={styles.p_buttonL}/>
        {
          projects.map((e, i) => <div key={i} style={{background: project_index > i-1 ? '#57618D' : '#151E34'}} className={styles.p_dot}/>)
        }
        <ArrowForwardSvg onClick={() => handle_pagination('right')} className={styles.p_button}/>
      </div>
    </div>
  )
} 
