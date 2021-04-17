import { UNAUTHORIZED, GATEWAY_TIMEOUT } from 'constants/httpStatus'
import { removeToken } from 'utils/token'

export const handleErrorStatus = status => {
  switch (status) {
    case UNAUTHORIZED:
    case GATEWAY_TIMEOUT:
      removeToken()
      window.location.href = '/login'
      break
    default:
      return null
  }
}

export const statusErrorApi = ({ data: { message } }) => {
  const messagesError = {
    'voting.is.closed': 'Votação encerrada.',
    'too.little.alternatives': `Quantidade de alternativas menor
    que número de questões.`,
    'too.much.alternatives': '',
    'invalid.alternative': 'Alternativa inválida.',
    'no.alternatives': 'Nenhum alternativa selecionada.',
    'poll.mandatory': 'Votação é necessária',
    'question.mandatory': 'Questão é necessária',
    'invalid.question': 'Questão inválida',
    'invalid.organization.member': 'Organizador inválido.',
    'question_id.mandatory': 'Questão precisa de um código.',
    'alternative.mandatory': 'Alternativa precisa de um código.',
    'elector.mandatory': 'Eleitor é necessário.',
    'organization.member.mandatory': 'Necessário ter um organizador.',
    'record.not.found': 'Ocorreu um erro inesperado. Tente novamente.',
    'record.has.childs': 'Ocorreu um erro inesperado. Tente novamente.',
    'record.errors': 'Ocorreu um erro inesperado. Tente novamente.'
  }

  return messagesError[message] || 'Ocorreu um erro inesperado. Tente novamente.'
}
