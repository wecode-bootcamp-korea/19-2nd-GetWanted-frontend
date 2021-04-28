import React, { useState, Component, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiDownload } from 'react-icons/fi';
import styled from 'styled-components';
import { STORAGE_FILES_API } from '../../../config';

const FileButton = ({ id, resume, type, deleteResume }) => {
  const history = useHistory();
  const [docStatus, setDocStatus] = useState('');

  useEffect(() => {
    if (type === 'form') {
      resume.status ? setDocStatus('작성 완료') : setDocStatus('작성 중');
    }

    if (type === 'file') {
      setDocStatus('첨부 완료');
    }
  }, []);

  const goToNext = e => {
    if (type === 'form') {
      history.push({
        pathname: `/resume/${e.target.id}`,
        state: { isNew: false },
      });
    }
  };

  const downloadFile = (url, type, id) => {
    if (type === 'file') {
      fetch(url).then(res => {
        res.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'resume.pdf';
          a.click();
        });
      });
    } else {
      fetch(`${STORAGE_FILES_API}/${id}`, {
        headers: {
          authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.F2PHl30DhhXk1wvQntHS3ZR7guDGgDjigeYX4MhwLd0',
        },
      }).then(res => {
        res.json().then(result => {
          let url = result.FILE;
          let a = document.createElement('a');
          a.href = url;
          a.download = 'resume.pdf';
          a.click();
        });
      });
    }
  };

  return (
    <FileButtonBox id={id} type={type}>
      <FileInfo onClick={goToNext}>
        <FileName id={id}>{resume.name}</FileName>
        <FileDate id={id}>{resume.date}</FileDate>
      </FileInfo>
      <FileStatus>
        <span>{docStatus}</span>
        <div>
          <DeleteButton id={id} onClick={() => deleteResume(resume.id, type)}>
            <RiDeleteBin5Line size="1.5em" />
          </DeleteButton>
          <DownloadButton
            onClick={() => downloadFile(resume.url, type, resume.id)}
          >
            <FiDownload size="1.5em" />
          </DownloadButton>
        </div>
      </FileStatus>
    </FileButtonBox>
  );
};

export default FileButton;

const FileButtonBox = styled.div`
  position: relative;
  margin: 0 10px 10px 0;
  padding-top: 20px;
  width: 230px;
  height: 190px;
  background-color: white;
  border: 1px solid ${props => props.theme.grayBtn};
  font-size: 16px;
  cursor: pointer;
`;

const FileInfo = styled.div`
  display: grid;
  padding: 0 20px;
`;

const FileName = styled.span`
  width: 160px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
`;

const FileDate = styled.span`
  font-size: 16px;
  color: ${props => props.theme.mainGray};
`;

const FileStatus = styled.div`
  position: absolute;
  ${props => props.theme.flexBetween}
  padding: 10px 20px;
  width: 100%;
  bottom: 0;
  border-top: 1px solid ${props => props.theme.grayBtn};
`;

const DeleteButton = styled.button`
  width: 40px;
  height: 30px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
`;

const DownloadButton = styled.button`
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.theme.blueTitle};
  a {
    color: ${props => props.theme.blueTitle};
  }
`;
