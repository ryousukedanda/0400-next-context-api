import { getProjects } from '../lib/fetcher';
import { useEffect, useState } from 'react';

const ProjectList = () => {
  const [projectList, setProjectList] = useState({});
  useEffect(() => {
    const getProjectList = async () => {
      return await getProjects();
    };
    getProjectList()
      .then((res) => {
        setProjectList(res);
      })
      .catch((err) => {
        console.log('error:', err);
      });
  }, []);
  return <div>ProjectList</div>;
};

export default ProjectList;
