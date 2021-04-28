import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BiAddToQueue, BiUpload } from 'react-icons/bi';
import FileButton from './FileButton';
import { STORAGE_LIST_API } from '../../../config';
import { STORAGE_FILES_API } from '../../../config';
import { STORAGE_FORMS_API } from '../../../config';

const StorageButton = ({ type }) => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [resumeList, setResumeList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const hiddenFileInput = useRef(null);
  const history = useHistory();

  const handleClickWrite = () => {
    history.push({ pathname: '/resume', state: { isNew: true } });
  };

  const handleClickUpload = e => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setSelectedFile(selectedFile.concat(file));
    const formData = new FormData();
    formData.append('File', file);

    fetch(`${STORAGE_FILES_API}`, {
      method: 'POST',
      headers: {
        authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.F2PHl30DhhXk1wvQntHS3ZR7guDGgDjigeYX4MhwLd0',
      },
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        setIsSelected(!isSelected);
      })
      .catch(error => console.log(error));
  };

  const deleteResume = (id, type) => {
    fetch(
      type === 'file'
        ? `${STORAGE_FILES_API}/${id}`
        : `${STORAGE_FORMS_API}/${id}`,
      {
        method: 'DELETE',
        headers: {
          authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.F2PHl30DhhXk1wvQntHS3ZR7guDGgDjigeYX4MhwLd0',
        },
      }
    )
      .then(res => res.json())
      .then(result => {
        setIsSelected(!isSelected);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetch(`${STORAGE_LIST_API}`, {
      headers: {
        authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.F2PHl30DhhXk1wvQntHS3ZR7guDGgDjigeYX4MhwLd0',
      },
    })
      .then(res => res.json())
      .then(list => {
        setResumeList(list.RESULTS[0].resume_list);
        setFileList(list.RESULTS[0].fileresume_list);
      })
      .catch(err => console.log(err));
  }, [isSelected]);

  return (
    <>
      <StorageButtonBox onClick={handleClickWrite} type={type}>
        <BiAddToQueue size="4em" />
        <span>새 이력서 작성</span>
      </StorageButtonBox>
      <StorageButtonBox onClick={handleClickUpload}>
        <BiUpload size="4em" />
        <span>파일 업로드</span>
        <form
          action="/resumes/files"
          method="post"
          encType="multipart/form-data"
        >
          <input
            style={{ display: 'none' }}
            onChange={handleFileChange}
            ref={hiddenFileInput}
            type="file"
          ></input>
        </form>
      </StorageButtonBox>
      {resumeList.map(resume => {
        return (
          <FileButton
            key={resume.id}
            id={resume.id}
            isSelected={isSelected}
            resume={resume}
            selectedFile={selectedFile}
            type="form"
            deleteResume={deleteResume}
          />
        );
      })}
      {fileList.map(resume => {
        return (
          <FileButton
            key={resume.id}
            id={resume.id}
            isSelected={isSelected}
            resume={resume}
            selectedFile={selectedFile}
            type="file"
            deleteResume={deleteResume}
          />
        );
      })}
    </>
  );
};

export default StorageButton;

const StorageButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 190px;
  margin: 0 10px 10px 0;
  background-color: white;
  border: 1px solid ${props => props.theme.grayBtn};
  font-size: 16px;
  cursor: pointer;

  span {
    margin-top: 20px;
  }

  svg {
    padding: 15px;
    border-radius: 50%;
    background-color: ${props =>
      props.type === 'write' ? props.theme.blueTitle : props.theme.grayBorder};
    color: ${props => (props.type === 'write' ? 'white' : '')};
  }
`;
