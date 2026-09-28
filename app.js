// ===== ICONS =====
const ICONS = {
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>',
  checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638l-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89l-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622l-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01l.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637l.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89l.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622l.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/></svg>',
  shieldCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56c-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625c.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625a11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263a63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42a18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>',
  lightning: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>',
  houseCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/><path d="m8 3.293l4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/><path d="M12.5 16a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1.679-4.493l-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547l1.17-1.951a.5.5 0 1 1 .858.514"/></g></svg>',
  personBadge: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="m8 0l1.669.864l1.858.282l.842 1.68l1.337 1.32L13.4 6l.306 1.854l-1.337 1.32l-.842 1.68l-1.858.282L8 12l-1.669-.864l-1.858-.282l-.842-1.68l-1.337-1.32L2.6 6l-.306-1.854l1.337-1.32l.842-1.68L6.331.864z"/><path d="M4 11.794V16l4-1l4 1v-4.206l-2.018.306L8 13.126L6.018 12.1z"/></g></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471z"/></svg>',
  droplet: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/></svg>',
  thermometer: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5"/><path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1m5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0M8 5.5a.5.5 0 0 1 .5-.5a3 3 0 1 1 0 6a.5.5 0 0 1 0-1a2 2 0 0 0 0-4a.5.5 0 0 1-.5-.5M12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708M8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5"/></g></svg>',
  tornado: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M1.125 2.45A.9.9 0 0 1 1 2c0-.26.116-.474.258-.634a1.9 1.9 0 0 1 .513-.389c.387-.21.913-.385 1.52-.525C4.514.17 6.18 0 8 0c1.821 0 3.486.17 4.709.452c.607.14 1.133.314 1.52.525c.193.106.374.233.513.389c.141.16.258.374.258.634c0 1.011-.35 1.612-.634 2.102l-.116.203a2.6 2.6 0 0 0-.313.809a3 3 0 0 0-.011.891a.5.5 0 0 1 .428.849q-.091.09-.215.195c.204 1.116.088 1.99-.3 2.711c-.453.84-1.231 1.383-2.02 1.856q-.307.183-.62.364c-1.444.832-2.928 1.689-3.735 3.706a.5.5 0 0 1-.748.226l-.001-.001l-.002-.001l-.004-.003l-.01-.008a2 2 0 0 1-.147-.115a4.1 4.1 0 0 1-1.179-1.656a3.8 3.8 0 0 1-.247-1.296A.5.5 0 0 1 5 12.5v-.018l.008-.079a.73.73 0 0 1 .188-.386c.09-.489.272-1.014.573-1.574a.5.5 0 0 1 .073-.918a3.3 3.3 0 0 1 .617-.144l.15-.193c.285-.356.404-.639.437-.861a.95.95 0 0 0-.122-.619c-.249-.455-.815-.903-1.613-1.43q-.291-.19-.609-.394l-.119-.076a12 12 0 0 1-1.241-.334a.5.5 0 0 1-.285-.707l-.23-.18C2.117 4.01 1.463 3.32 1.125 2.45m1.973 1.051q.17.156.358.308c.472.381.99.722 1.515 1.06c1.54.317 3.632.5 5.43.14a.5.5 0 0 1 .197.981c-1.216.244-2.537.26-3.759.157c.399.326.744.682.963 1.081c.203.373.302.79.233 1.247q-.077.494-.39.985l.22.053l.006.002c.481.12.863.213 1.47.01a.5.5 0 1 1 .317.95c-.888.295-1.505.141-2.023.012l-.006-.002a4 4 0 0 0-.644-.123c-.37.55-.598 1.05-.726 1.497q.212.068.465.194a.5.5 0 1 1-.448.894a3 3 0 0 0-.148-.07c.012.345.084.643.18.895c.14.369.342.666.528.886c.992-1.903 2.583-2.814 3.885-3.56q.305-.173.584-.34c.775-.464 1.34-.89 1.653-1.472c.212-.393.33-.9.26-1.617A6.74 6.74 0 0 1 10 8.5a.5.5 0 0 1 0-1a5.76 5.76 0 0 0 3.017-.872l-.007-.03c-.135-.673-.14-1.207-.056-1.665c.084-.46.253-.81.421-1.113l.131-.23q.098-.167.182-.327c-.29.107-.62.202-.98.285C11.487 3.83 9.822 4 8 4c-1.821 0-3.486-.17-4.709-.452q-.098-.022-.193-.047M13.964 2a1 1 0 0 0-.214-.145c-.272-.148-.697-.297-1.266-.428C11.354 1.166 9.769 1 8 1s-3.354.166-4.484.427c-.569.13-.994.28-1.266.428A1 1 0 0 0 2.036 2q.058.058.214.145c.272.148.697.297 1.266.428C4.646 2.834 6.231 3 8 3s3.354-.166 4.484-.427c.569-.13.994-.28 1.266-.428A1 1 0 0 0 13.964 2"/></svg>',
  exclamationTriangle: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"/></svg>',
  water: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65"/></svg>',
  wrench: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61"/><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5l1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5l.159.474l.808-.27l-.595.894a.25.25 0 0 0 .287.376l.808-.27l-.595.894a.25.25 0 0 0 .287.376l1.5-.5l-.159-.474l-.808.27l.596-.894a.25.25 0 0 0-.288-.376l-.808.27z"/></g></svg>',
  fire: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 16c3.314 0 6-2 6-5.5c0-1.5-.5-4-2.5-6c.25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6c-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75c0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5c-.179 1-.25 2 1 3c.625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/></svg>',
  wind: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1a.5.5 0 0 1-1 0a2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3a.5.5 0 0 1 1 0a2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/></svg>',
  grid: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"/></svg>',
  thermometerHigh: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415"/><path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/></g></svg>',
  arrowRepeat: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182a.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/></g></svg>',
  calendarCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/></g></svg>',
  sun: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M4 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0"/><path d="M8.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.707.707a.5.5 0 0 0 .707.708zM13.5 7.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-.964 3.743a.5.5 0 1 0-.707.707l.707.707a.5.5 0 1 0 .707-.707zM8 12.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m-3.743-.964a.5.5 0 0 0-.707-.707l-.707.707a.5.5 0 0 0 .707.707zM2.5 7.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm.964-3.743a.5.5 0 0 0 .707-.707l-.707-.707a.5.5 0 0 0-.707.707z"/></g></svg>',
  lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-5 .5a.5.5 0 0 1-.5-.5m2.5 1.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5"/></svg>',
  bolt: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658l-1.5 4.5a.5.5 0 0 1-.474.342H6.5a.5.5 0 0 1 0-1h3.106l1-3H6.414l-1.36 3.72a.5.5 0 0 1-.934-.352zM.92 3.61a.5.5 0 0 1 .675-.326L3.5 4.367a2 2 0 0 0 1.215.162l2.996-.665a2.5 2.5 0 0 1 1.83.218l1.92.96a1.5 1.5 0 0 0 .912.162l3.596-.719a.5.5 0 0 1 .182.984l-3.596.719a2.5 2.5 0 0 1-1.52-.27l-1.92-.96a1.5 1.5 0 0 0-1.098-.13l-2.997.666a3 3 0 0 1-1.822-.244L1.246 4.285a.5.5 0 0 1-.326-.675m14.166 5.416a.5.5 0 0 1-.367.592l-3.595.718a2.5 2.5 0 0 1-1.52-.27l-1.92-.96a1.5 1.5 0 0 0-1.098-.13l-2.997.666a3 3 0 0 1-1.822-.244l-1.903-.951a.5.5 0 0 1 .434-.9l1.904.951a2 2 0 0 0 1.215.162l2.996-.665a2.5 2.5 0 0 1 1.83.218l1.92.96a1.5 1.5 0 0 0 .912.162l3.596-.719a.5.5 0 0 1 .592.367m-14.15 4.471a.5.5 0 0 1 .64-.294l1.903.952a2 2 0 0 0 1.215.162l2.996-.665a2.5 2.5 0 0 1 1.83.218l1.92.96a1.5 1.5 0 0 0 .912.162l3.596-.719a.5.5 0 0 1 .182.984l-3.596.719a2.5 2.5 0 0 1-1.52-.27l-1.92-.96a1.5 1.5 0 0 0-1.098-.13l-2.997.666a3 3 0 0 1-1.822-.244l-1.903-.951a.5.5 0 0 1-.294-.64"/></svg>',
  geoAlt: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>',
  quote: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5a.5.5 0 0 1 0 1c-1.387 0-2.6.672-3.6 1.427c-.571.432-.97.856-1.186 1.166c-.108.155-.18.29-.222.393c.073.018.205.052.388.102c1.155.318 2.318.554 3.328.75c.516.1.99.193 1.392.3c.68.18 1.012.459 1.192.778c.173.307.21.71.07 1.197c-.294.967-1.298 1.922-2.12 2.289c-.48.214-.818.182-1.064.11c-.247-.074-.475-.26-.618-.48c-.248-.383-.27-.922-.083-1.42c.192-.514.537-.918.854-1.149c.243-.177.44-.237.516-.252c-.153-.1-.387-.19-.673-.264c-.512-.132-1.23-.286-2.022-.462c-.456-.1-.942-.225-1.422-.391c-.41-.14-.84-.316-1.197-.568c-.34-.24-.669-.56-.869-.982c-.208-.436-.192-1.055.285-1.513zm6.642 0c.412-.621 1.242-1.75 2.366-2.717C11.825 4.242 13.177 3.5 14.65 3.5a.5.5 0 0 1 0 1c-1.387 0-2.6.672-3.6 1.427c-.571.432-.97.856-1.186 1.166c-.108.155-.18.29-.222.393c.073.018.205.052.388.102c1.155.318 2.318.554 3.328.75c.516.1.99.193 1.392.3c.68.18 1.012.459 1.192.778c.173.307.21.71.07 1.197c-.294.967-1.298 1.922-2.12 2.289c-.48.214-.818.182-1.064.11c-.247-.074-.475-.26-.618-.48c-.248-.383-.27-.922-.083-1.42c.192-.514.537-.918.854-1.149c.243-.177.44-.237.516-.252c-.153-.1-.387-.19-.673-.264c-.512-.132-1.23-.286-2.022-.462c-.456-.1-.942-.225-1.422-.391c-.41-.14-.84-.316-1.197-.568c-.34-.24-.669-.56-.869-.982c-.208-.436-.192-1.055.285-1.513z"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>',
  checkLg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"/></svg>',
};

// ===== DATA =====
const NAV_LINKS = [
  { label: 'Home', href: '/', page: 'index' },
  { label: 'About', href: '/about/', page: 'about' },
  { label: 'Services', href: '/services/', page: 'services', children: [
    { label: 'Wall Tiling', href: '/services/wall-tiling/', page: 'wall-tiling' },
    { label: 'Floor Tiling', href: '/services/floor-tiling/', page: 'floor-tiling' },
  ]},
  { label: 'Tiling Projects', href: '/gallery/', page: 'gallery' },
  { label: 'Blog', href: '/blog/', page: 'blog' },
  { label: 'Contact', href: '/contact/', page: 'contact' },
];

const MARQUEE_ITEMS = [
  'Bathroom Tiling', 'Kitchen Tiling', 'Floor Tiling', 'Splashbacks',
  'Porcelain', 'Ceramic', 'Natural Stone', 'Marble', 'Mosaic',
  'Feature Walls', 'Surface Preparation'
];

const SERVICES = [
  { icon: 'grid', title: 'Kitchen Floor & Wall Tiling', desc: 'Durable, good-looking tiling for kitchen floors and walls — built to handle daily life and look great doing it.', price: '' },
  { icon: 'droplet', title: 'Bathroom Tiling', desc: 'Full bathroom tiling including walls, floors, showers and wet rooms. Waterproofed, sealed, and finished to a high standard.', price: '' },
  { icon: 'wrench', title: 'Tile Removal & Prep Work', desc: 'Got old tiles that need to go? I can remove them, prep the surface, and get it ready for a fresh new finish.', price: '' },
];

const SERVICES_PAGE = [
  { icon: 'grid', title: 'Wall Tiling', desc: 'Kitchen splashbacks, bathroom walls, showers and feature walls — backgrounds prepared properly and tiles fixed for a finish that lasts.', href: '/services/wall-tiling/' },
  { icon: 'grid', title: 'Floor Tiling', desc: 'Durable, professional floor tiling for any room in your home. I prepare the subfloor to ensure a flat and stable surface, and lay tiles in whichever bond pattern you’d like.', href: '/services/floor-tiling/' },
];

const TESTIMONIALS = [
  { text: 'Recently had Jordan in to tile our kitchen floor and splash back. Couldn\'t recommend him enough - easy to communicate with and always turned up when he said he would.', name: 'Montana A.', location: 'Trowbridge', category: 'Kitchen', avatar: '' },
  { text: 'Jordan recently helped us with tiling our kitchen floor. He was incredibly easy to communicate with and provided us with supportive advice with not only picking the type of tiles to use but talked us through how to take care of them too. He was throughout professional and a pleasure to have in our home. Would highly recommend!', name: 'Lauren P.', location: 'Trowbridge', category: 'Kitchen', avatar: '' },
];

const SERVICE_AREAS = ['Trowbridge', 'Bath', 'Wiltshire', 'Bradford-on-Avon', 'Warminster', 'Frome', 'Westbury', 'Melksham', 'Chippenham', 'Devizes', 'Salisbury'];

const HOW_IT_WORKS = [
  { step: 1, title: 'Give Me a Call', desc: 'Get in touch and tell me a bit about your project — what room, what size, and any ideas you\'ve got in mind.' },
  { step: 2, title: 'Fast Quote & Chat', desc: 'I\'ll pop round to take a look, talk through the options, and give you a clear price with no pressure.' },
  { step: 3, title: 'I Get to Work', desc: 'Once you\'re happy, I\'ll get it booked in. I turn up on time, keep things tidy, and work to get it right.' },
  { step: 4, title: 'You Love the Result', desc: 'I clean up after myself, walk you through the finished job, and make sure you\'re happy before I leave.' },
];

const GALLERY_PROJECTS = [
  {
    title: 'Kitchen splashback with 200 x 100mm ceramic metro tiles',
    shortTitle: 'Kitchen Splashback',
    tag: 'Wall Tiling',
    area: '16m\u00b2',
    description: 'A recent splashback project. This job involved removing the old tiles, repairing the wall to provide a flat surface, and fitting new 200 \u00d7 100mm ceramic metro-style tiles in a brick bond pattern.',
    folder: 'kitchen-splashback',
    images: [
      { file: 'photo1.jpg', alt: '200x100mm ceramic metro-style splashback tiles in a brick bond pattern, photo taken from the left. Kitchen splashback Trowbridge' },
      { file: 'photo2.jpg', alt: '200x100mm ceramic metro-style splashback tiles in a brick bond pattern, straight ahead photo. Kitchen splashback Trowbridge' },
      { file: 'photo3.jpg', alt: '200x100mm ceramic metro-style splashback tiles in a brick bond pattern, photo taken from the right. Kitchen splashback Trowbridge' },
    ]
  },
  {
    title: 'Dining room floor with a 600 x 600 Porcelain tile',
    shortTitle: 'Dining Room Floor',
    tag: 'Floor Tiling',
    area: '12m\u00b2',
    description: '600 \u00d7 600mm porcelain floor tiles installed across a 12m\u00b2 dining room floor. Self-levelling compound was applied as preparation prior to tiling, ensuring a flat surface with no tile lippage.',
    folder: 'dining-room-floor-tiling',
    images: [
      { file: 'photo1.jpg', alt: '600 x 600 porcelain floor tiles, straight ahead photo. Dining room floor tiling Trowbridge' },
      { file: 'photo2.jpg', alt: '600 x 600 porcelain floor tiles, photo taken from angle. Dining room floor tiling Trowbridge' },
    ]
  },
  {
    title: 'Kitchen Floor with a 600 x 300 ceramic tile',
    shortTitle: 'Kitchen Floor',
    tag: 'Floor Tiling',
    area: '8m\u00b2',
    description: '600 \u00d7 300mm ceramic floor tiles installed across an 8m\u00b2 kitchen floor. Self-levelling compound was applied as preparation prior to tiling, ensuring a flat surface with no tile lippage.',
    folder: 'kitchen-floor-tiling',
    images: [
      { file: 'photo1.jpg', alt: '600 x 300 ceramic floor tiles, photo taken from doorway. Kitchen floor tiling Trowbridge' },
      { file: 'photo2.jpg', alt: '600 x 300 ceramic floor tiles, photo taken from utility room. Kitchen floor tiling Trowbridge' },
      { file: 'photo3.jpg', alt: '600 x 300 ceramic floor tiles, aerial photo. Kitchen floor tiling Trowbridge' },
    ]
  },
];

const BLOG_POSTS = [
  {
    title: 'Surface Preparation for Tiling: How I Handle Different Substrates',
    excerpt: 'What happens before the first tile goes on — levelling, waterproofing, decoupling membranes and backer boards, and why getting preparation right matters more than the tiles you choose.',
    date: 'September 2026',
    img: '/images/services/wall-prep/photo1.jpg',
    alt: 'Wall preparation for tiling',
    href: '/blog/surface-preparation-for-tiling/',
  },
];

const PREP_IMAGES = [
  '/images/services/wall-prep/photo1.jpg',
  '/images/services/wall-prep/photo2.jpg',
  '/images/services/wall-prep/photo3.jpg',
  '/images/services/wall-prep/photo4.jpg',
  '/images/services/wall-prep/photo5.jpg',
  '/images/services/wall-prep/photo6.jpg',
  '/images/services/wall-prep/photo7.jpg',
];

let prepCurrentImage = 0;

function initPrepCarousel() {
  const track = document.querySelector('.prep-carousel-track');
  const dotsEl = document.getElementById('prepCarouselDots');
  if (!track || !dotsEl) return;

  dotsEl.innerHTML = PREP_IMAGES.map((_, i) =>
    `<button class="prep-carousel-dot${i === 0 ? ' active' : ''}" onclick="scrollPrepToImage(${i})" aria-label="Go to photo ${i + 1}"></button>`
  ).join('');

  track.addEventListener('scroll', () => {
    const idx = Math.round(track.scrollLeft / track.offsetWidth);
    if (idx !== prepCurrentImage) {
      prepCurrentImage = idx;
      updatePrepDots();
    }
  });

  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0 && prepCurrentImage < PREP_IMAGES.length - 1) scrollPrepToImage(prepCurrentImage + 1);
      else if (dx > 0 && prepCurrentImage > 0) scrollPrepToImage(prepCurrentImage - 1);
    }
  }, { passive: true });
}

function scrollPrepCarousel(dir) {
  const track = document.querySelector('.prep-carousel-track');
  if (!track) return;
  const next = Math.max(0, Math.min(prepCurrentImage + dir, PREP_IMAGES.length - 1));
  scrollPrepToImage(next);
}

function scrollPrepToImage(idx) {
  const track = document.querySelector('.prep-carousel-track');
  if (!track) return;
  prepCurrentImage = idx;
  track.scrollTo({ left: idx * track.offsetWidth, behavior: 'smooth' });
  updatePrepDots();
}

function updatePrepDots() {
  document.querySelectorAll('.prep-carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === prepCurrentImage);
  });
}

function showPrepLightbox(idx) {
  prepCurrentImage = idx;
  const total = PREP_IMAGES.length;

  const dotsHtml = PREP_IMAGES.map((_, i) =>
    `<button class="lightbox-dot${i === idx ? ' active' : ''}" aria-label="Go to photo ${i + 1}"></button>`
  ).join('');

  const newLb = document.createElement('div');
  newLb.id = 'lightbox';
  newLb.className = 'lightbox';
  newLb.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <button class="lightbox-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg></button>
    <button class="lightbox-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></button>
    <div class="lightbox-content">
      <img src="${PREP_IMAGES[idx]}" alt="Wall preparation photo ${idx + 1}" style="transition: opacity 0.15s ease;">
      <div class="lightbox-info">
        <p class="lightbox-caption">Wall Preparation</p>
        <div class="lightbox-dots">${dotsHtml}</div>
      </div>
    </div>
  `;

  function renderPrepLb() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    const lbImg = lb.querySelector('.lightbox-content img');
    if (lbImg) {
      lbImg.style.opacity = '0';
      setTimeout(() => {
        lbImg.src = PREP_IMAGES[prepCurrentImage];
        lbImg.alt = `Wall preparation photo ${prepCurrentImage + 1}`;
        lbImg.style.opacity = '1';
      }, 150);
    }
    lb.querySelectorAll('.lightbox-dot').forEach((d, i) => d.classList.toggle('active', i === prepCurrentImage));
  }

  function closePrepLb() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.remove();
    document.body.classList.remove('lightbox-open');
  }

  newLb.addEventListener('click', e => { if (e.target === newLb) closePrepLb(); });
  newLb.querySelector('.lightbox-close').addEventListener('click', closePrepLb);
  newLb.querySelector('.lightbox-prev').addEventListener('click', e => {
    e.stopPropagation();
    prepCurrentImage = (prepCurrentImage - 1 + total) % total;
    renderPrepLb();
  });
  newLb.querySelector('.lightbox-next').addEventListener('click', e => {
    e.stopPropagation();
    prepCurrentImage = (prepCurrentImage + 1) % total;
    renderPrepLb();
  });
  newLb.querySelectorAll('.lightbox-dot').forEach((dot, i) => {
    dot.addEventListener('click', e => {
      e.stopPropagation();
      prepCurrentImage = i;
      renderPrepLb();
    });
  });

  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape') closePrepLb();
    if (e.key === 'ArrowLeft') { prepCurrentImage = (prepCurrentImage - 1 + total) % total; renderPrepLb(); }
    if (e.key === 'ArrowRight') { prepCurrentImage = (prepCurrentImage + 1) % total; renderPrepLb(); }
  });

  let lbTouchStartX = 0;
  newLb.addEventListener('touchstart', e => { lbTouchStartX = e.changedTouches[0].screenX; }, { passive: true });
  newLb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - lbTouchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) { prepCurrentImage = (prepCurrentImage + 1) % total; renderPrepLb(); }
      else { prepCurrentImage = (prepCurrentImage - 1 + total) % total; renderPrepLb(); }
    }
  }, { passive: true });

  document.body.appendChild(newLb);
  document.body.classList.add('lightbox-open');
  setTimeout(() => newLb.classList.add('open'), 10);
}

const FOOTER_CONTACT = [
  { icon: 'phone', html: '<strong>07788 577456</strong>', href: 'tel:+447788577456' },
  { icon: 'send', html: '<strong>jordan@avonsidetiling.co.uk</strong>', href: 'mailto:jordan@avonsidetiling.co.uk' },
];

const SOCIAL_ICONS = [
  { icon: 'facebook', href: 'https://www.facebook.com/share/1GYtKqW63B/?mibextid=wwXIfr' },
  { icon: 'instagram', href: 'https://www.instagram.com/avonsidetiling/' },
];

// ===== RENDER FUNCTIONS =====
function renderHeader(activePage) {
  const el = document.getElementById('header');
  if (!el) return;
  el.innerHTML = `
    <header class="site-header" id="siteHeader">
      <div class="container header-inner">
        <a href="/" class="logo"><img src="/images/avonside-logo-black.png" alt="Avonside Tiling — Wall and floor tiler in Trowbridge" height="40"></a>
        <nav class="desktop-nav" id="desktopNav">
          <ul>
            ${NAV_LINKS.map(l => {
              if (l.children) {
                return `<li class="nav-dropdown">
                  <a href="${l.href}"${l.page === activePage ? ' class="active"' : ''}>${l.label} <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></a>
                  <ul class="dropdown-menu">
                    ${l.children.map(c => `<li><a href="${c.href}"${c.page === activePage ? ' class="active"' : ''}>${c.label}</a></li>`).join('')}
                  </ul>
                </li>`;
              }
              return `<li><a href="${l.href}"${l.page === activePage ? ' class="active"' : ''}>${l.label}</a></li>`;
            }).join('')}
          </ul>
        </nav>
        <div class="header-actions">
          <a href="tel:+447788577456" class="btn-phone">${ICONS.phone} 07788 577456</a>
        </div>
        <button class="menu-toggle" id="menuToggle" aria-label="Menu">
          <div class="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        <ul>
          ${NAV_LINKS.map(l => {
            if (l.children) {
              return `<li class="mobile-dropdown">
                <a href="${l.href}"${l.page === activePage ? ' class="active"' : ''}>${l.label}</a>
                <ul class="mobile-submenu">
                  ${l.children.map(c => `<li><a href="${c.href}"${c.page === activePage ? ' class="active"' : ''}>${c.label}</a></li>`).join('')}
                </ul>
              </li>`;
            }
            return `<li><a href="${l.href}"${l.page === activePage ? ' class="active"' : ''}>${l.label}</a></li>`;
          }).join('')}
        </ul>
        <a href="tel:+447788577456" class="btn-phone mobile-phone">${ICONS.phone} 07788 577456</a>
        <div class="mobile-social">
          ${SOCIAL_ICONS.map(s => `<a href="${s.href}" aria-label="${s.icon}">${ICONS[s.icon]}</a>`).join('')}
        </div>
      </div>
    </header>
  `;

  document.getElementById('menuToggle').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('mobileMenu').classList.toggle('open');
    document.querySelector('.menu-icon').classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });

  document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobileMenu');
    if (!menu.classList.contains('open')) return;
    if (menu.contains(e.target)) return;
    menu.classList.remove('open');
    document.querySelector('.menu-icon').classList.remove('open');
    document.body.classList.remove('menu-open');
  });

  window.addEventListener('scroll', () => {
    document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="footer-logo"><img src="/images/avonside-logo-white.png" alt="Avonside Tiling — Wall and floor tiler in Trowbridge" height="40"></div>
          <p>Wall and floor tiling for homes and businesses across Wiltshire, Bath and surrounding areas. All work carried out to British Standards (BS&nbsp;5385).</p>
          <div class="footer-social">
            ${SOCIAL_ICONS.map(s => `<a href="${s.href}" aria-label="${s.icon}">${ICONS[s.icon]}</a>`).join('')}
          </div>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            ${NAV_LINKS.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get in touch</h4>
          <ul class="footer-contact">
            ${FOOTER_CONTACT.map(l => {
              const inner = l.href ? `<a href="${l.href}">${ICONS[l.icon]} ${l.html}</a>` : `<span>${ICONS[l.icon]} ${l.html}</span>`;
              return `<li>${inner}</li>`;
            }).join('')}
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; 2026 Avonside Tiling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

function renderMarquee() {
  const el = document.getElementById('marquee');
  if (!el) return;
  const itemsHtml = MARQUEE_ITEMS.map(m => `
    <span class="marquee-item">
      ${m}
    </span>
    <span class="marquee-sep">&bull;</span>
  `).join('');
  el.innerHTML = `<div class="marquee-track">${itemsHtml}</div>`;
  initMarquee();
}

function initMarquee() {
  const track = document.querySelector('.marquee-track');
  const section = document.querySelector('.marquee-section');
  if (!track) return;
  const maxSpeed = 1;
  let pos = 0;
  let currentSpeed = maxSpeed;
  let targetSpeed = maxSpeed;
  track.innerHTML += track.innerHTML;
  section.addEventListener('mouseenter', () => { targetSpeed = 0; });
  section.addEventListener('mouseleave', () => { targetSpeed = maxSpeed; });
  function animate() {
    currentSpeed += (targetSpeed - currentSpeed) * 0.08;
    pos -= currentSpeed;
    const w = track.scrollWidth / 2;
    if (Math.abs(pos) >= w) pos = 0;
    track.style.transform = 'translateX(' + pos + 'px)';
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

function renderServices() {
  const el = document.getElementById('serviceGrid');
  if (!el) return;
  const shuffled = [...SERVICES].sort(() => Math.random() - 0.5);
  el.innerHTML = shuffled.map((s, i) => `
    <div class="svc-card delay-${i + 1}" data-animate>
      <div class="svc-card-top">
        <div class="svc-icon">${ICONS[s.icon]}</div>
      </div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

function renderServicesPage() {
  const grid = document.getElementById('servicesPageGrid');
  const howItWorks = document.getElementById('servicesHowItWorks');
  if (grid) {
    grid.innerHTML = SERVICES_PAGE.map((s, i) => `
      <a class="svc-card delay-${(i % 4) + 1}" data-animate href="${s.href}">
        <div class="svc-card-top">
          <div class="svc-icon">${ICONS[s.icon]}</div>
        </div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="svc-card-bottom">
          <span class="svc-link">Find out more ${ICONS.arrowRight}</span>
        </div>
      </a>
    `).join('');
  }
  if (howItWorks) {
    howItWorks.innerHTML = HOW_IT_WORKS.map((h, i) => `
      <div class="choose-card delay-${i + 1}" data-animate>
        <span class="choose-card-num">${String(h.step).padStart(2, '0')}</span>
        <h3>${h.title}</h3>
        <p>${h.desc}</p>
      </div>
    `).join('');
  }
}

function projectCardMarkup(project, i) {
  return `
    <a class="project-card delay-${(i % 5) + 1}" data-animate href="/projects/${project.folder}/">
      <div class="project-card-img">
        <img src="/images/gallery/${project.folder}/cover.jpg" alt="${project.images[0].alt}" loading="lazy">
        <span class="project-card-tag">${project.tag}</span>
      </div>
      <div class="project-card-body">
        <h3>${project.shortTitle}</h3>
        <p>${project.description}</p>
        <span class="project-card-link">View project &rarr;</span>
      </div>
    </a>
  `;
}

function renderGallery() {
  const el = document.getElementById('galleryGrid');
  if (!el) return;
  el.innerHTML = GALLERY_PROJECTS.map(projectCardMarkup).join('');
}

function renderLatestProjects() {
  const el = document.getElementById('latestProjects');
  if (!el) return;
  el.innerHTML = GALLERY_PROJECTS.map(projectCardMarkup).join('');
}

function renderBlog() {
  const el = document.getElementById('blogGrid');
  if (!el) return;
  el.innerHTML = BLOG_POSTS.map((post, i) => `
    <a class="blog-card delay-${(i % 5) + 1}" data-animate href="${post.href}">
      <div class="blog-card-img">
        <img src="${post.img}" alt="${post.alt}" loading="lazy">
      </div>
      <div class="blog-card-body">
        <span class="blog-card-date">${post.date}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <span class="blog-card-link">Read post &rarr;</span>
      </div>
    </a>
  `).join('');
}

let currentProject = 0;
let currentImage = 0;
let touchStartX = 0;
let touchStartY = 0;

function showProjectLightbox(projectIndex) {
  currentProject = projectIndex;
  currentImage = 0;
  renderLightbox();
}

function renderLightbox() {
  const lb = document.getElementById('lightbox');
  const project = GALLERY_PROJECTS[currentProject];
  const img = project.images[currentImage];
  const src = `/images/gallery/${project.folder}/${img.file}`;
  const total = project.images.length;

  if (lb) {
    const lbImg = lb.querySelector('.lightbox-content img');
    const lbCaption = lb.querySelector('.lightbox-caption');
    if (lbImg) {
      lbImg.style.opacity = '0';
      setTimeout(() => {
        lbImg.src = src;
        lbImg.alt = img.alt;
        lbImg.style.opacity = '1';
      }, 150);
    }
    if (lbCaption) lbCaption.textContent = project.title;
    const dots = lb.querySelectorAll('.lightbox-dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentImage));
    return;
  }

  const dotsHtml = project.images.map((_, i) => `<button class="lightbox-dot${i === 0 ? ' active' : ''}" aria-label="Go to photo ${i + 1}"></button>`).join('');

  const newLb = document.createElement('div');
  newLb.id = 'lightbox';
  newLb.className = 'lightbox';
  newLb.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <button class="lightbox-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg></button>
    <button class="lightbox-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></button>
    <div class="lightbox-content">
      <img src="${src}" alt="${img.alt}" style="transition: opacity 0.15s ease;">
      <div class="lightbox-info">
        <p class="lightbox-caption">${project.title}</p>
        <div class="lightbox-dots">${dotsHtml}</div>
      </div>
    </div>
  `;

  newLb.addEventListener('click', e => { if (e.target === newLb) closeLightbox(); });
  newLb.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  newLb.querySelector('.lightbox-prev').addEventListener('click', (e) => {
    e.stopPropagation();
    currentImage = (currentImage - 1 + total) % total;
    renderLightbox();
  });
  newLb.querySelector('.lightbox-next').addEventListener('click', (e) => {
    e.stopPropagation();
    currentImage = (currentImage + 1) % total;
    renderLightbox();
  });
  newLb.querySelectorAll('.lightbox-dot').forEach((dot, i) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      currentImage = i;
      renderLightbox();
    });
  });

  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { currentImage = (currentImage - 1 + total) % total; renderLightbox(); }
    if (e.key === 'ArrowRight') { currentImage = (currentImage + 1) % total; renderLightbox(); }
  });

  newLb.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  newLb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) { currentImage = (currentImage + 1) % total; renderLightbox(); }
      else { currentImage = (currentImage - 1 + total) % total; renderLightbox(); }
    }
  }, { passive: true });

  document.body.appendChild(newLb);
  document.body.classList.add('lightbox-open');
  setTimeout(() => newLb.classList.add('open'), 10);
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.remove();
  document.body.classList.remove('lightbox-open');
}

let projectImages = [];
let projectImageIndex = 0;

function initProjectGallery() {
  const links = document.querySelectorAll('.project-photo');
  if (!links.length) return;
  projectImages = Array.from(links).map(a => ({ src: a.href, alt: a.querySelector('img')?.alt || '' }));
  links.forEach((a, i) => {
    a.addEventListener('click', e => { e.preventDefault(); showProjectImageLightbox(i); });
  });
}

function showProjectImageLightbox(idx) {
  projectImageIndex = idx;
  const total = projectImages.length;
  const img = projectImages[idx];

  const existing = document.getElementById('lightbox');
  if (existing) existing.remove();

  const dotsHtml = total <= 12
    ? projectImages.map((_, i) => `<button class="lightbox-dot${i === idx ? ' active' : ''}" aria-label="Go to photo ${i + 1}"></button>`).join('')
    : '';

  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.className = 'lightbox';
  lb.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <button class="lightbox-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg></button>
    <button class="lightbox-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></button>
    <div class="lightbox-content">
      <img src="${img.src}" alt="${img.alt}" style="transition: opacity 0.15s ease;">
      <div class="lightbox-info">
        <p class="lightbox-counter">${idx + 1} / ${total}</p>
        ${dotsHtml ? `<div class="lightbox-dots">${dotsHtml}</div>` : ''}
      </div>
    </div>
  `;

  function render() {
    const lbEl = document.getElementById('lightbox');
    if (!lbEl) return;
    const lbImg = lbEl.querySelector('.lightbox-content img');
    const counter = lbEl.querySelector('.lightbox-counter');
    if (lbImg) {
      lbImg.style.opacity = '0';
      setTimeout(() => {
        lbImg.src = projectImages[projectImageIndex].src;
        lbImg.alt = projectImages[projectImageIndex].alt;
        lbImg.style.opacity = '1';
      }, 150);
    }
    if (counter) counter.textContent = `${projectImageIndex + 1} / ${total}`;
    lbEl.querySelectorAll('.lightbox-dot').forEach((d, i) => d.classList.toggle('active', i === projectImageIndex));
  }

  function close() {
    const lbEl = document.getElementById('lightbox');
    if (lbEl) lbEl.remove();
    document.body.classList.remove('lightbox-open');
  }

  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  lb.querySelector('.lightbox-close').addEventListener('click', close);
  lb.querySelector('.lightbox-prev').addEventListener('click', e => { e.stopPropagation(); projectImageIndex = (projectImageIndex - 1 + total) % total; render(); });
  lb.querySelector('.lightbox-next').addEventListener('click', e => { e.stopPropagation(); projectImageIndex = (projectImageIndex + 1) % total; render(); });
  lb.querySelectorAll('.lightbox-dot').forEach((dot, i) => {
    dot.addEventListener('click', e => { e.stopPropagation(); projectImageIndex = i; render(); });
  });

  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') { projectImageIndex = (projectImageIndex - 1 + total) % total; render(); }
    if (e.key === 'ArrowRight') { projectImageIndex = (projectImageIndex + 1) % total; render(); }
  });

  let touchStartX = 0;
  lb.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) { projectImageIndex = (projectImageIndex + 1) % total; render(); }
      else { projectImageIndex = (projectImageIndex - 1 + total) % total; render(); }
    }
  }, { passive: true });

  document.body.appendChild(lb);
  document.body.classList.add('lightbox-open');
  setTimeout(() => lb.classList.add('open'), 10);
}

function renderTestimonials() {
  const el = document.getElementById('testimonials');
  if (!el) return;
  const cards = TESTIMONIALS.map((t, i) => `
    <div class="testimonial-card" data-animate>
      <div class="testimonial-stars">
        <span class="testimonial-stars-icons">${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}</span>
        <span class="testimonial-google">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Google Review
        </span>
      </div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div>
          <strong>${t.name}</strong>
          <span></span>
        </div>
      </div>
    </div>
  `).join('');
  el.innerHTML = cards;
  initTestimonialArrows();
}

function initTestimonialArrows() {
  const scrollEl = document.getElementById('testimonials');
  const leftBtn = document.getElementById('testimonialLeft');
  const rightBtn = document.getElementById('testimonialRight');
  if (!scrollEl || !leftBtn || !rightBtn) return;
  const card = scrollEl.querySelector('.testimonial-card');
  if (!card) return;
  const scrollStep = card.offsetWidth + 24;
  scrollEl.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      scrollEl.scrollBy({ left: e.deltaY * 0.3, behavior: 'smooth' });
    }
  }, { passive: false });
  rightBtn.addEventListener('click', () => {
    if (scrollEl.scrollLeft + scrollEl.clientWidth >= scrollEl.scrollWidth - 10) {
      scrollEl.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scrollEl.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
  });
  leftBtn.addEventListener('click', () => {
    if (scrollEl.scrollLeft <= 10) {
      scrollEl.scrollTo({ left: scrollEl.scrollWidth, behavior: 'smooth' });
    } else {
      scrollEl.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    }
  });
}

function renderServiceAreas() {
  const el = document.getElementById('serviceAreas');
  if (!el) return;
  el.innerHTML = SERVICE_AREAS.map(s => `<button class="area-btn">${s}</button>`).join('');
}

function renderHowItWorks() {
  const el = document.getElementById('howItWorks');
  if (!el) return;
  el.innerHTML = HOW_IT_WORKS.map((h, i) => `
    <div class="hiw-step delay-${i + 1}" data-animate>
      <div class="hiw-number">${h.step}</div>
      <h3>${h.title}</h3>
      <p>${h.desc}</p>
    </div>
  `).join('');
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const els = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="mailto:"]');
  if (link) {
    e.preventDefault();
    copyEmail(link.getAttribute('href').replace('mailto:', ''), link);
    return;
  }
  const card = e.target.closest('.contact-card');
  if (card) {
    const mailLink = card.querySelector('a[href^="mailto:"]');
    if (mailLink) {
      e.preventDefault();
      copyEmail(mailLink.getAttribute('href').replace('mailto:', ''), mailLink);
    }
  }
});

function copyEmail(email, target) {
  navigator.clipboard.writeText(email).then(() => {
    const tooltip = document.createElement('span');
    tooltip.textContent = 'Copied!';
    tooltip.style.cssText = 'position:absolute; bottom:100%; left:50%; transform:translateX(-50%); background:#111; color:#fff; padding:4px 10px; border-radius:6px; font-size:12px; font-weight:600; white-space:nowrap; z-index:10; pointer-events:none;';
    target.style.position = 'relative';
    target.appendChild(tooltip);
    setTimeout(() => { tooltip.remove(); }, 2000);
  }).catch(() => {});
}
