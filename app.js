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
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.852-.04 1.434-.174 1.942-.372c.526-.213.972-.478 1.417-.924c.445-.444.718-.89.923-1.417c.198-.51.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.942-.372C10.445.01 10.173 0 8 0m0 1.441c2.136 0 2.39.008 3.233.047c.78.036 1.203.166 1.485.276c.374.145.64.318.92.598s.453.546.598.92c.11.282.24.705.276 1.485c.039.844.047 1.097.047 3.233s-.008 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485a2.5 2.5 0 0 1-.598.92a2.5 2.5 0 0 1-.92.598c-.282.11-.705.24-1.485.276c-.844.039-1.097.047-3.233.047s-2.39-.008-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485C1.456 10.39 1.448 10.136 1.448 8s.008-2.39.047-3.233c.036-.78.166-1.203.276-1.485a2.5 2.5 0 0 1 .598-.92a2.5 2.5 0 0 1 .92-.598c.282-.11.705-.24 1.485-.276C5.61 1.449 5.864 1.441 8 1.441m0 2.452a4.107 4.107 0 1 0 0 8.214a4.107 4.107 0 0 0 0-8.214m0 1.441a2.666 2.666 0 1 1 0 5.332a2.666 2.666 0 0 1 0-5.332m4.303-.269a.96.96 0 1 1-1.92 0a.96.96 0 0 1 1.92 0"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>',
  checkLg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"/></svg>',
};

// ===== DATA =====
const NAV_LINKS = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', href: 'about.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'Contact', href: 'contact.html' },
];

const MARQUEE_ITEMS = [
  { icon: 'geoAlt', text: 'Wiltshire' },
  { icon: 'geoAlt', text: 'Bath' },
  { icon: 'geoAlt', text: 'Bristol' },
  { icon: 'checkCircle', text: 'Floors' },
  { icon: 'checkCircle', text: 'Walls' },
  { icon: 'checkCircle', text: 'Kitchens' },
  { icon: 'checkCircle', text: 'Bathrooms' },
  { icon: 'checkCircle', text: 'Splashbacks' },
  { icon: 'checkCircle', text: 'Ceramic' },
  { icon: 'checkCircle', text: 'Porcelain' },
  { icon: 'checkCircle', text: 'Stone' },
];

const SERVICES = [
  { icon: 'grid', title: 'Kitchen Wall & Floor', desc: 'Floor and wall tiling for kitchens — durable, water-resistant finishes for high-traffic areas.', price: '' },
  { icon: 'droplet', title: 'Bathroom Wall & Floor', desc: 'Full bathroom tiling including floors, walls, shower enclosures, and wet rooms — waterproofed and sealed.', price: '' },
  { icon: 'wrench', title: 'Tile Removal & Prep', desc: 'Old tile removal, surface preparation, and substrate repairs — ready for a perfect new installation.', price: '' },
];

const TESTIMONIALS = [
  { text: 'Water heater failed on Thanksgiving morning at 6 AM. I called expecting to leave a voicemail \u2014 someone picked up immediately. A tech arrived within the hour, diagnosed the unit, and had us back with hot water well before dinner. I\'ve never experienced service like this from any home services company. Ever.', name: 'Sarah M.', location: 'Houston, TX', category: 'Emergency', avatar: '' },
  { text: 'Panel upgrade done in one day. Passed city inspection on the first visit. The tech even labeled every breaker clearly \u2014 something the original electrician never did. Fair price for a big job.', name: 'Marcus H.', location: 'Atlanta, GA', category: 'Electrical', avatar: '' },
  { text: 'Annual HVAC plan caught a refrigerant leak before summer. Saved me from a $3,000 compressor failure. The plan paid for itself three times over in one visit. Technicians are always on time.', name: 'Priya N.', location: 'Phoenix, AZ', category: 'HVAC', avatar: '' },
];

const SERVICE_AREAS = ['Texas', 'California', 'Florida', 'Colorado', 'Tennessee', 'Georgia', 'Arizona', 'Nevada', 'Ohio', 'North Carolina', 'Virginia', 'Illinois'];

const HOW_IT_WORKS = [
  { step: 1, title: 'Call or Book Online', desc: 'Tell us your issue and preferred schedule via phone or our easy online form.' },
  { step: 2, title: 'Tech Is Dispatched', desc: 'A certified local technician is assigned and on their way \u2014 you\'ll get a real-time ETA.' },
  { step: 3, title: 'Diagnosis & Quote', desc: 'Your tech diagnoses the issue and presents a clear, upfront quote \u2014 no pressure.' },
  { step: 4, title: 'Job Done Right', desc: 'We complete the work, clean up after ourselves, and follow up to make sure you\'re happy.' },
];

const FOOTER_COMPANY = [
  { label: 'About Us', href: 'about.html' },
  { label: 'Careers', href: '#' },
  { label: 'Blog & Tips', href: '#' },
  { label: 'Reviews', href: '#' },
  { label: 'Booking', href: '#' },
  { label: 'Contact', href: 'contact.html' },
];

const FOOTER_CONTACT = [
  { icon: 'phone', html: '<strong>07788 577456</strong><br>Main & Emergency Line', href: 'tel:4407788577456' },
  { icon: 'send', html: '<strong>hello@plumber.com</strong>', href: 'mailto:hello@plumber.com' },
  { icon: 'geoAlt', html: 'Serving 12 states across the USA' },
  { icon: 'clock', html: '24 / 7 / 365 \u2014 Always Available' },
];

const SOCIAL_ICONS = [
  { icon: 'facebook', href: '#' },
  { icon: 'instagram', href: '#' },
  { icon: 'x', href: '#' },
  { icon: 'youtube', href: '#' },
];

// ===== RENDER FUNCTIONS =====
function renderHeader(activePage) {
  const el = document.getElementById('header');
  if (!el) return;
  el.innerHTML = `
    <header class="site-header" id="siteHeader">
      <div class="container header-inner">
        <a href="index.html" class="logo">Plumber</a>
        <nav class="desktop-nav" id="desktopNav">
          <ul>
            ${NAV_LINKS.map(l => `<li><a href="${l.href}"${l.href.replace('.html','') === activePage ? ' class="active"' : ''}>${l.label}</a></li>`).join('')}
          </ul>
        </nav>
        <div class="header-actions">
          <a href="tel:4407788577456" class="btn-phone">${ICONS.phone} 07788 577456</a>
        </div>
        <button class="menu-toggle" id="menuToggle" aria-label="Menu">${ICONS.menu}</button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        <ul>
          ${NAV_LINKS.map(l => `<li><a href="${l.href}"${l.href.replace('.html','') === activePage ? ' class="active"' : ''}>${l.label}</a></li>`).join('')}
        </ul>
        <a href="tel:4407788577456" class="btn-phone mobile-phone">${ICONS.phone} 07788 577456</a>
      </div>
    </header>
  `;

  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
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
          <div class="footer-logo">Plumber</div>
          <p>Professional Plumbing, HVAC & Electrical services across the USA. Licensed, insured, and always on time.</p>
          <div class="footer-social">
            ${SOCIAL_ICONS.map(s => `<a href="${s.href}" aria-label="${s.icon}">${ICONS[s.icon]}</a>`).join('')}
          </div>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            ${FOOTER_COMPANY.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="footer-contact">
            ${FOOTER_CONTACT.map(l => {
              const inner = l.href ? `<a href="${l.href}">${l.html}</a>` : `<span>${l.html}</span>`;
              return `<li>${inner}</li>`;
            }).join('')}
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; 2026 Plumber LLC. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
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
      <span class="marquee-icon">${ICONS[m.icon]}</span>
      ${m.text}
    </span>
  `).join('');
  el.innerHTML = `<div class="marquee-track">${itemsHtml}</div>`;
  initMarquee();
}

function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  const speed = 1;
  let pos = 0;
  track.innerHTML += track.innerHTML;
  function animate() {
    pos -= speed;
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
  el.innerHTML = SERVICES.map((s, i) => `
    <div class="svc-card" style="animation-delay:${i * 0.1}s">
      <div class="svc-card-top">
        <div class="svc-icon">${ICONS[s.icon]}</div>
      </div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const el = document.getElementById('testimonials');
  if (!el) return;
  el.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div>
          <strong>${t.name}</strong>
          <span>${t.location} \u2014 ${t.category}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderServiceAreas() {
  const el = document.getElementById('serviceAreas');
  if (!el) return;
  el.innerHTML = SERVICE_AREAS.map(s => `<button class="area-btn">${s}</button>`).join('');
}

function renderHowItWorks() {
  const el = document.getElementById('howItWorks');
  if (!el) return;
  el.innerHTML = HOW_IT_WORKS.map(h => `
    <div class="hiw-step">
      <div class="hiw-number">${h.step}</div>
      <h3>${h.title}</h3>
      <p>${h.desc}</p>
    </div>
  `).join('');
}
