import { _saveQuestion, _saveQuestionAnswer } from './_DATA.js';

describe('_saveQuestion_expected_fields', () => {
  it('should return the saved question with all expected fields populated when correctly formatted data is passed', async () => {
    const question = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: 'authorId'
    };

    const savedQuestion = await _saveQuestion(question);

    expect(savedQuestion).toHaveProperty('id');
    expect(savedQuestion).toHaveProperty('timestamp');
    expect(savedQuestion).toHaveProperty('author', question.author);
    expect(savedQuestion).toHaveProperty('optionOne.text', question.optionOneText);
    expect(savedQuestion).toHaveProperty('optionTwo.text', question.optionTwoText);
  });
});

describe('_saveQuestion_incorrect_data_optionOneText', () => {
  it('should return an error if optionOneText is missing', async () => {
    const question = {
      optionOneText: '',
      optionTwoText: 'Option Two',
      author: 'authorId'
    };

    await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
  });
});

describe('_saveQuestion_incorrect_data_optionTwoText', () => {
  it('should return an error if optionTwoText is missing', async () => {
    const question = {
      optionOneText: 'Option One',
      optionTwoText: '',
      author: 'authorId'
    };

    await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
  });
});

describe('_saveQuestion_incorrect_data_author', () => {
  it('should return an error if author is missing', async () => {
    const question = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: ''
    };

    await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
  });
});

describe('_saveQuestionAnswer_expected_fields', () => {
  it('should return the saved question answer with all expected fields populated when correctly formatted data is passed', async () => {
    const question_answer = {
      authedUser: 'peiol',
      qid: 'am8ehyc8byjqgar0jgpub9',
      answer: 'optionOne'
    };

    const savedAnswer = await _saveQuestionAnswer(question_answer);
    console.log(savedAnswer);

    expect(savedAnswer).toHaveProperty('questions');
    const question = savedAnswer.questions[question_answer.qid]
    expect(question[question_answer.answer].votes).toContain(question_answer.authedUser);

    expect(savedAnswer).toHaveProperty('users');
    const user = savedAnswer.users[question_answer.authedUser];
    expect(user.answers).toHaveProperty(question_answer.qid, question_answer.answer);

  });
});
describe('_saveQuestionAnswer_incorrect_data_authedUser', () => {
  it('should return an error if authedUser is missing', async () => {
    const question_answer = {
      authedUser: '',
      qid: 'am8ehyc8byjqgar0jgpub9',
      answer: 'optionOne'
    };

    await expect(_saveQuestionAnswer(question_answer)).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});

describe('_saveQuestionAnswer_incorrect_data_qid', () => {
  it('should return an error if qid is missing', async () => {
    const question_answer = {
      authedUser: 'peiol',
      qid: '',
      answer: 'optionOne'
    };

    await expect(_saveQuestionAnswer(question_answer)).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});

describe('_saveQuestionAnswer_incorrect_data_answer', () => {
  it('should return an error if answer is missing', async () => {
    const question_answer = {
      authedUser: 'peiol',
      qid: 'am8ehyc8byjqgar0jgpub9',
      answer: ''
    };

    await expect(_saveQuestionAnswer(question_answer)).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});

