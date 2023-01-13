
function ToggleChildUL(id) {
    var childUL = document.getElementById('ulID' + id);
    var img = document.getElementById('ulImgID' + id);
    if (childUL.style.display == 'block') {
        childUL.style.display = 'none';
        img.classList.add('setasImgClosed');
        img.classList.remove('setasImgOpened');
    }
    else {
        childUL.style.display = 'block';
        img.classList.add('setasImgOpened');
        img.classList.remove('setasImgClosed');
    }
}

////////////////////////////////////////
//Para visualizar anexo de workflow
function viewDoc(idAnexo, nmarquivoanexo) {
    if (!idAnexo) {
        idAnexo = '';
    }

    if (!nmarquivoanexo) {
        nmarquivoanexo = '';
    }

    var w = window.open("/asp/wf_002/frame_view_anexo.asp?idDocto=" + idAnexo + "&nmarqanx=" + nmarquivoanexo, "viewAnexo_" + idAnexo, "top=0,left=0,width=" + (screen.availWidth - 10) + ",height=" + (screen.availHeight - 30) + ",scrollbars=yes,toolbar=no,location=no,directories=no,status=no,resizable=yes");
    w.focus();
}

////////////////////////////////////////
//Para visualizar documento publicado
function abreJanelaVisualizarDoc(idDocumento) {
    var w = window.open("/PublishViewer/VisualizadorDocumentos/?iddocumento=" + idDocumento, "viewDoc_" + idDocumento, "top=0,left=0,width=800,height=600,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,resizable=yes");
    w.focus();
}

////////////////////////////////////////
//Para visualizar documento publicado na revisão informada
function abreJanelaVisualizarDocRev(idDocumento, idRevisao) {
    var w = window.open("/PublishViewer/VisualizadorDocumentos/?iddocumento=" + idDocumento + "&idrevisao=" + idRevisao, "viewDoc_" + idDocumento, "top=0,left=0,width=800,height=600,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,resizable=yes");
    w.focus();
}

////////////////////////////////////////
//Para visualizar documento publicado da estrutura, exibindo apenas o documento, não exibindo o painel do visualizador
//Esta função espera que no html exista dois elementos que contenham o id da estrutura e número da versão da estrutura:
// <input type="hidden" id="publish_id_estrutura" value="[cfw_publish_id_estrutura]">
// <input type="hidden" id="publish_nr_versao_estrutura" value="[cfw_publish_nr_versao_estrutura]">
//Esses elementos devem conter na propriedade id os mesmos nomes dos campos padrões publish: publish_id_estrutura e publish_nr_versao_estrutura
function abreJanelaVisualizarDocDaEstrutura(idDocumento) {
    //Busca id e versão da estrutura dos elementos html com id padrão publish
    var idEstrutura = null;
    var nrVersaoEstrutura = null;
    var strMsg = "";

    try {
        var objIdEstrutura = document.getElementById("publish_id_estrutura");
        if (objIdEstrutura != null) {
            try {
                idEstrutura = objIdEstrutura.value;
                if (idEstrutura == undefined) {
                    idEstrutura = null;
                }
            }
            catch (e) {
                idEstrutura = null;
            }

            if (idEstrutura == null) {
                try {
                    idEstrutura = objIdEstrutura.innerText;
                    if (idEstrutura == undefined) {
                        idEstrutura = null;
                    }
                }
                catch (e) {
                    idEstrutura = null;
                }
            }

            if (idEstrutura != null) {
                if (idEstrutura.length == 0) {
                    idEstrutura = null;
                }
            }
        }

        var objNrVersaoEstrutura = document.getElementById("publish_nr_versao_estrutura");
        if (objNrVersaoEstrutura != null) {
            try {
                nrVersaoEstrutura = objNrVersaoEstrutura.value;
                if (nrVersaoEstrutura == undefined) {
                    nrVersaoEstrutura = null;
                }
            }
            catch (e) {
                nrVersaoEstrutura = null;
            }

            if (nrVersaoEstrutura == null) {
                try {
                    nrVersaoEstrutura = objNrVersaoEstrutura.innerText;
                    if (nrVersaoEstrutura == undefined) {
                        nrVersaoEstrutura = null;
                    }
                }
                catch (e) {
                    nrVersaoEstrutura = null;
                }
            }

            if (nrVersaoEstrutura != null) {
                if (nrVersaoEstrutura.length == 0) {
                    nrVersaoEstrutura = null;
                }
            }
        }
    }
    catch (e) {
        strMsg = "Ocorrência: " + e.Message;
    }

    if (idEstrutura == null || nrVersaoEstrutura == null) {
        strMsg = "Não é possível exibir o documento. Não foi localizado o ID da estrutura ou a versão da estrutura de documento para este documento. " + strMsg;
        alert(strMsg);
    }
    else {
        var w = window.open("/PublishViewer/VisualizadorDocumentos/?iddocumento=" + idDocumento + "&idestrutura=" + idEstrutura + "&nrversaoestrutura=" + nrVersaoEstrutura, "viewdocdaest_" + idDocumento, "top=0,left=0,width=" + (screen.availWidth - 10) + ",height=" + (screen.availHeight - 30) + ",scrollbars=yes,toolbar=no,location=no,directories=no,status=no,resizable=yes");
        w.focus();
    }
}
