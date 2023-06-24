import React, { useState } from 'react';
import {
  Box,
  Button,
  Textarea,
  VStack,
  ChakraProvider,
  
  useColorMode,
  ColorModeProvider,
} from '@chakra-ui/react';




const Comment = ({ author, text }) => (
  <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
    <Box mb={2}>
      <strong>{author}</strong>
    </Box>
    <Box>{text}</Box>
  </Box>
);

const CommentForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author, text });
    setAuthor('');
    setText('');
  };

  return (
    <Box as="form" onSubmit={handleSubmit} bg="white" p={4} borderRadius="md">
      <VStack spacing={2} align="stretch">
        <Textarea
          placeholder="Add a public comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          isRequired
        />
        <Button
          colorScheme="red"
          variant="solid"
          type="submit"
          size="sm"
          ml="auto"
        >
          Comment
        </Button>
      </VStack>
    </Box>
  );
};

const Comments = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <VStack spacing={4} align="stretch">
      <CommentForm onSubmit={addComment} />
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </VStack>
  );
};

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider >
      <ColorModeProvider value={colorMode}>
        <Box p={4} bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}>
          <Button onClick={toggleColorMode} mb={4}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
          <Comments />
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
