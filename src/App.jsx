import { useState } from 'react';
import { CustomCard } from './components/Card/Card';
import './App.css';
import { Projects } from './components/Card/products';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"; // Import the Navbar

const App = () => {
  const [filterTag, setFilterTag] = useState(null);

  const handleTagClick = (tag) => {
    setFilterTag(tag);
  };

  const filteredProjects = filterTag
    ? Projects.filter((project) =>
        project.tags.actual.includes(filterTag)
      )
    : Projects;

  return (
    <div>
      <Navbar /> 
      <div className='container mx-auto px-4 bg-gray-700'>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <CustomCard
              key={project.id}
              image={project.image}
              description={project.description}
              title={project.title}
              tags={project.tags}
              status={project.status}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;


