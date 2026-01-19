'use client';
import DateDecorator from '@/api/datastore/models/date';
import { useMessage } from '@/context/MessageProvider';
import {
  faBoxArchive,
  faCalendar,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  defaultProject,
  projectGetDetailErrorMessage,
} from 'features/projects/constants/projectConstants';
import { getProjectDetail } from 'features/projects/repository';
import { ProjectInfo } from 'features/projects/types/projects';
import { use, useEffect, useMemo, useState } from 'react';

const page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const [project, setProject] = useState<ProjectInfo>(defaultProject);
  const { showMessage } = useMessage();

  useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        const res = await getProjectDetail(slug);
        setProject(res);
      } catch (err) {
        showMessage('error', projectGetDetailErrorMessage);
      }
    };
    fetchProjectDetail();
  }, []);

  const deadline = useMemo(
    () => new DateDecorator(project.deadline ?? ''),
    [project.deadline]
  );
  const restDay = deadline.from();
  const displayDate = deadline?.forHtml ?? '';

  return (
    <div className="p-8 w-full h-full overflow-scroll bg-content">
      <div className="bg-light2 p-8">
        <div>
          <div>
            <div
              className=" p-4 rounded-sm border-weak-border"
              style={{ borderLeft: `5px solid ${project.color}` }}
            >
              <div className="flex justify-between">
                <h1
                  style={{ color: `${project.color}` }}
                  className="text-[14px] relative bg-light2 py-2 px-4 font-bold"
                >
                  {project.name}
                </h1>
                <div className="cursor-pointer"></div>
              </div>
              <div className="relative -top-9">
                <div className="flex items-center text-[14px] p-4 my-4 mx-0 w-full">
                  <label className="flex mr-4 text-[12px] tracking-[.1rem] min-w-[15%]">
                    <span className="relative top-0.5 mr-8">ゴール:</span>
                  </label>
                  <div>
                    <p className="flex tracking-[.1rem]">
                      <span className="inline-block mr-2">
                        あと {restDay} 日
                      </span>
                      <span className="text-[12px] relative top-0.5">
                        ({displayDate})
                      </span>
                    </p>
                    <p className="text-[28px] font-bold tracking-[.2rem]">
                      {project.goal}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-[14px] p-4 my-4 mx-0 w-full">
                  <label className="flex mr-4 text-[12px] tracking-[.1rem] min-w-[15%]">
                    <span className="relative top-0.5 mr-8">あるべき姿:</span>
                  </label>
                  <p>{project.shouldbe}</p>
                </div>
                <div className="w-[70%] h-px bg-weak-border"></div>
                <div className="flex items-center text-[14px] p-4 my-4 mx-0 w-full">
                  <label className="flex mr-4 text-[12px] tracking-[.1rem] min-w-[15%]">
                    スラッグ:
                  </label>
                  <div className="flex justify-between items-center">
                    <span className="inline-block mr-2">/projects/</span>
                    <div>
                      <input
                        type="text"
                        className="rounded-sm py-2 px-3 w-full font-light text-[12px] text-dark border-0 shadow-[0_0_4px_4px_#22222210]"
                        value={project.slug}
                        onChange={(e) =>
                          setProject((prev) => ({
                            ...prev,
                            slug: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
