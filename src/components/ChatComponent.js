import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot';

import {Fab} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#eb3449',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#eb3449',
  botFontColor: '#fff',
  userBubbleColor: '#0cb3c9',
  userFontColor: '#fff',
}

export default function ChatComponent() {

 const[chatBotWindow, setChatBotWindow]=useState(false);

  return (

    <div> 
      
      {chatBotWindow &&
        <ThemeProvider theme={theme}>
          <ChatBot 
            steps={[
              {
                id: '1',
                message: 'What number I am thinking?',
                trigger: '2',
              },
              {
                id: '2',
                options: [
                  { value: 1, label: 'Number 1', trigger: '4' },
                  { value: 2, label: 'Number 2', trigger: '3' },
                  { value: 3, label: 'Number 3', trigger: '3' },
                ],
              },
              {
                id: '3',
                message: 'Wrong answer, try again.',
                trigger: '2',
              },
              {
                id: '4',
                message: 'Awesome! You are a telepath!',
                end: true,
              },
            ]}
          />
        </ThemeProvider>
      }

      {!chatBotWindow &&
        <Fab mx={2} color="primary" aria-label="Add" onClick={()=> setChatBotWindow(true)}>
            <ChatBubbleOutlineIcon />
        </Fab>
      }
    </div>
  )
}
