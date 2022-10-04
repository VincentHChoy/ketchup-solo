export const setCID = (cid) => {
  return {
    type: 'SET_CID',
    payload: cid
  }
}

export const toggleChat = () => {
  return {
    type: 'TOGGLE_CHAT'
  }
}


export const setDocId = (googleId) => {
  return {
    type: 'DOC_ID',
    payload: googleId
  }
}

export const setSheetsId = (googleId) => {
  return {
    type: 'SHEETS_ID',
    payload: googleId
  }
}