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

  const CarouselButton: React.FC<{desktop: boolean, direction: string}> = (props) => {
    let c_name;
    if (props.direction == 'right') {
      c_name = props.desktop ? styles.c_button : styles.p_button;
    } else {
      c_name = props.desktop ? styles.c_buttonL : styles.p_buttonL;
    }

    return  <ArrowForwardSvg onClick={() => handle_pagination(props.direction)} className={c_name}/>
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Projects</p>
      <div className={styles.inner_container}>
        <CarouselButton desktop direction='left'/>
        <div className={styles.content} />
        <CarouselButton desktop direction='right'/>
      </div>
      <div className={styles.navigation}>
      </div>
      <div className={styles.pagination}>
        <CarouselButton desktop={false} direction='left'/>
        {
          projects.map((e, i) => <div key={i} style={{background: project_index > i-1 ? '#57618D' : '#151E34'}} className={styles.p_dot}/>)
        }
        <CarouselButton desktop={false} direction='right'/>
      </div>
    </div>
  )
} 
