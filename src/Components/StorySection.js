import React from 'react';
import { aboutMeText } from '../Components/const';

const MyStorySection = () => {
    return (
        <div className="myStorySection">
           <p className="myStorySection_title">{aboutMeText.myStoryTitle}</p>
           <ul className="myStorySection_story">
                {aboutMeText.myStoryDescription.map((item, index) => (
                    <li key={index} className="myStorySection_story_item">
                        {item}
                    </li>
                ))}
           </ul>
        </div>
    )
}

export default MyStorySection;