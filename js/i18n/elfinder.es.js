/**
 * Spanish translation
 * @author Julián Torres <julian.torres@pabernosmatao.com>
 * @author Julio Montoya <gugli100@gmail.com> - Fixing typos
 * @version 2014-12-19
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.es = {
		translator : 'Julián Torres &lt;julian.torres@pabernosmatao.com&gt;Julio Montoya &lt;gugli100@gmail.com&gt;',
		language   : 'Español internacional',
		direction  : 'ltr',
		dateFormat : 'M d, Y h:i A', // Mar 13, 2012 05:27 PM
		fancyDateFormat : '$1 h:i A', // will produce smth like: Today 12:25 PM
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Error',
			'errUnknown'           : 'Error desconocido.',
			'errUnknownCmd'        : 'Comando desconocido.',
			'errJqui'              : 'Configuración inválida de jQuery UI. Deben estar incluidos los componentes selectable, draggable y droppable.',
			'errNode'              : 'elFinder necesita crear elementos DOM.',
			'errURL'               : 'Configuración inválida de elFinder! La opción URL no está configurada.',
			'errAccess'            : 'Acceso denegado.',
			'errConnect'           : 'No se ha podido conectar con el backend.',
			'errAbort'             : 'Conexión cancelada.',
			'errTimeout'           : 'Conexión cancelada por timeout.',
			'errNotFound'          : 'Backend no encontrado.',
			'errResponse'          : 'Respuesta no válida del backend.',
			'errConf'              : 'Configuración no válida del backend .',
			'errJSON'              : 'El módulo PHP JSON no está instalado.',
			'errNoVolumes'         : 'No hay disponibles volúmenes legibles.',
			'errCmdParams'         : 'Parámetros no válidos para el comando "$1".',
			'errDataNotJSON'       : 'Los datos no estan en formato JSON.',
			'errDataEmpty'         : 'No hay datos.',
			'errCmdReq'            : 'La petición del backend necesita un nombre de comando.',
			'errOpen'              : 'No se puede abrir "$1".',
			'errNotFolder'         : 'El objeto no es una carpeta.',
			'errNotFile'           : 'El objeto no es un archivo.',
			'errRead'              : 'No se puede leer "$1".',
			'errWrite'             : 'No se puede escribir en "$1".',
			'errPerm'              : 'Permiso denegado.',
			'errLocked'            : '"$1" está bloqueado y no puede ser renombrado, movido o borrado.',
			'errExists'            : 'Ya existe un archivo llamado "$1".',
			'errInvName'           : 'Nombre de archivo no válido.',
			'errFolderNotFound'    : 'Carpeta no encontrada.',
			'errFileNotFound'      : 'Archivo no encontrado.',
			'errTrgFolderNotFound' : 'Carpeta de destino "$1" no encontrada.',
			'errPopup'             : 'El navegador impide abrir nuevas ventanas. Puede activarlo en las opciones del navegador.',
			'errMkdir'             : 'No se puede crear la carpeta "$1".',
			'errMkfile'            : 'No se puede crear el archivo "$1".',
			'errRename'            : 'No se puede renombrar "$1".',
			'errCopyFrom'          : 'No se permite copiar archivos desde el volumen "$1".',
			'errCopyTo'            : 'No se permite copiar archivos al volumen "$1".',
			'errUpload'            : 'Error en el envio.',
			'errUploadFile'        : 'No se puede subir "$1".',
			'errUploadNoFiles'     : 'No hay archivos para subir.',
			'errUploadTotalSize'   : 'El tamaño de los datos excede el máximo permitido.',
			'errUploadFileSize'    : 'El tamaño del archivo excede el máximo permitido.',
			'errUploadMime'        : 'Tipo de archivo no permitido.',
			'errUploadTransfer'    : 'Error al transferir "$1".',
			'errNotReplace'        : 'Object "$1" already exists at this location and can not be replaced by object with another type.',
			'errReplace'           : 'Unable to replace "$1".',
			'errSave'              : 'No se puede guardar "$1".',
			'errCopy'              : 'No se puede copiar "$1".',
			'errMove'              : 'No se puede mover "$1".',
			'errCopyInItself'      : 'No se puede copiar "$1" en si mismo.',
			'errRm'                : 'No se puede borrar "$1".',
			'errRmSrc'             : 'Unable remove source file(s).',
			'errExtract'           : 'No se puede extraer archivos desde "$1".',
			'errArchive'           : 'No se puede crear el archivo.',
			'errArcType'           : 'Tipo de archivo no soportado.',
			'errNoArchive'         : 'El archivo no es de tipo archive o es de un tipo no soportado.',
			'errCmdNoSupport'      : 'El backend no soporta este comando.',
			'errReplByChild'       : 'La carpeta “$1” no puede ser reemplazada por un elemento contenido en ella.',
			'errArcSymlinks'       : 'Por razones de seguridad no se pueden descomprimir archivos que contengan symlinks.',
			'errArcMaxSize'        : 'El tamaño del archivo excede el máximo permitido.',
			'errResize'            : 'Unable to resize "$1".',
			'errResizeDegree'      : 'Invalid rotate degree.',
			'errResizeRotate'      : 'Image dose not rotated.',
			'errResizeSize'        : 'Invalid image size.',
			'errResizeNoChange'    : 'Image size not changed.',
			'errUsupportType'      : 'Unsupported file type.',
			'errNotUTF8Content'    : 'File "$1" is not in UTF-8 and cannot be edited.',
			'errNetMount'          : 'Unable to mount "$1".',
			'errNetMountNoDriver'  : 'Unsupported protocol.',
			'errNetMountFailed'    : 'Mount failed.',
			'errNetMountHostReq'   : 'Host required.',
			'errSessionExpires'    : 'La sesión ha expirado por inactividad',
			'errCreatingTempDir'   : 'No se ha podido crear al directorio temporal: "$1"',
			'errFtpDownloadFile'   : 'No se ha podido descargar el archivo desde FTP: "$1"',
			'errFtpUploadFile'     : 'No se ha podido cargar el archivo a FTP: "$1"',
			'errFtpMkdir'          : 'No se ha podido crear el directorio remoto en FTP: "$1"',
			'errArchiveExec'       : 'Se ha producido un error durante la archivación: "$1"',
			'errExtractExec'       : 'Se ha producido un error durante la extracción de archivos: "$1"',
			'cmdsort'              : 'Ordenar',
			'sortkind'             : 'por tipo',
			'sortname'             : 'por nombre',
			'sortsize'             : 'por tamaño',
			'sortdate'             : 'por fecha',
			'sortFoldersFirst'     : 'Las carpetas en primer lugar',
			'errUploadFile'        : 'No se ha podido cargar "$1".',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Crear archivo',
			'cmdback'      : 'Atrás',
			'cmdcopy'      : 'Copiar',
			'cmdcut'       : 'Cortar',
			'cmddownload'  : 'Descargar',
			'cmdduplicate' : 'Duplicar',
			'cmdedit'      : 'Editar archivo',
			'cmdextract'   : 'Extraer elementos del archivo',
			'cmdforward'   : 'Adelante',
			'cmdgetfile'   : 'Seleccionar archivos',
			'cmdhelp'      : 'Acerca de este software',
			'cmdhome'      : 'Inicio',
			'cmdinfo'      : 'Obtener información',
			'cmdmkdir'     : 'Nueva carpeta',
			'cmdmkfile'    : 'Nuevo archivo de texto',
			'cmdopen'      : 'Abrir',
			'cmdpaste'     : 'Pegar',
			'cmdquicklook' : 'Previsualizar',
			'cmdreload'    : 'Recargar',
			'cmdrename'    : 'Cambiar nombre',
			'cmdrm'        : 'Eliminar',
			'cmdsearch'    : 'Buscar archivos',
			'cmdup'        : 'Ir a la carpeta raíz',
			'cmdupload'    : 'Subir archivos',
			'cmdview'      : 'Ver',
			'cmdresize'    : 'Resize & Rotate',
			'cmdsort'      : 'Sort',
			'cmdnetmount'  : 'Mount network volume',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Cerrar',
			'btnSave'   : 'Guardar',
			'btnRm'     : 'Eliminar',
			'btnApply'  : 'Apply',
			'btnCancel' : 'Cancelar',
			'btnNo'     : 'No',
			'btnYes'    : 'Sí',
			'btnMount'  : 'Mount',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Abrir carpeta',
			'ntffile'     : 'Abrir archivo',
			'ntfreload'   : 'Actualizar contenido de la carpeta',
			'ntfmkdir'    : 'Creando directorio',
			'ntfmkfile'   : 'Creando archivos',
			'ntfrm'       : 'Eliminando archivos',
			'ntfcopy'     : 'Copiar archivos',
			'ntfmove'     : 'Mover archivos',
			'ntfprepare'  : 'Preparar copia de archivos',
			'ntfrename'   : 'Renombrar archivos',
			'ntfupload'   : 'Subiendo archivos',
			'ntfdownload' : 'Descargando archivos',
			'ntfsave'     : 'Guardar archivos',
			'ntfarchive'  : 'Creando archivo',
			'ntfextract'  : 'Extrayendo elementos del archivo',
			'ntfsearch'   : 'Buscando archivos',
			'ntfresize'   : 'Resizing images',
			'ntfsmth'     : 'Haciendo algo',
			'ntfloadimg'  : 'Cargando imagen',
			'ntfnetmount' : 'Mounting network volume',
			'ntfdim'      : 'Acquiring image dimension',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'desconocida',
			'Today'       : 'Hoy',
			'Yesterday'   : 'Ayer',
			'msJan'       : 'Ene',
			'msFeb'       : 'Feb',
			'msMar'       : 'Mar',
			'msApr'       : 'Abr',
			'msMay'       : 'May',
			'msJun'       : 'Jun',
			'msJul'       : 'Jul',
			'msAug'       : 'Ago',
			'msSep'       : 'Sep',
			'msOct'       : 'Oct',
			'msNov'       : 'Nov',
			'msDec'       : 'Dic',
			'January'     : 'January',
			'February'    : 'February',
			'March'       : 'March',
			'April'       : 'April',
			'May'         : 'May',
			'June'        : 'June',
			'July'        : 'July',
			'August'      : 'August',
			'September'   : 'September',
			'October'     : 'October',
			'November'    : 'November',
			'December'    : 'December',
			'Sunday'      : 'Sunday',
			'Monday'      : 'Monday',
			'Tuesday'     : 'Tuesday',
			'Wednesday'   : 'Wednesday',
			'Thursday'    : 'Thursday',
			'Friday'      : 'Friday',
			'Saturday'    : 'Saturday',
			'Sun'         : 'Sun', 
			'Mon'         : 'Mon', 
			'Tue'         : 'Tue', 
			'Wed'         : 'Wed', 
			'Thu'         : 'Thu', 
			'Fri'         : 'Fri', 
			'Sat'         : 'Sat',

			/********************************** messages **********************************/
			'confirmReq'      : 'Se necesita confirmación',
			'confirmRm'       : '¿Está seguro de querer eliminar archivos?<br/>Esto no tiene vuelta atrás!',
			'confirmRepl'     : '¿Reemplazar el antiguo archivo con el nuevo?',
			'apllyAll'        : 'Aplicar a todo',
			'name'            : 'Nombre',
			'size'            : 'Tamaño',
			'perms'           : 'Permisos',
			'modify'          : 'Modificado',
			'kind'            : 'Tipo',
			'read'            : 'lectura',
			'write'           : 'escritura',
			'noaccess'        : 'sin acceso',
			'and'             : 'y',
			'unknown'         : 'desconocido',
			'selectall'       : 'Seleccionar todos los archivos',
			'selectfiles'     : 'Seleccionar archivo(s)',
			'selectffile'     : 'Seleccionar primer archivo',
			'selectlfile'     : 'Seleccionar último archivo',
			'viewlist'        : 'ver como lista',
			'viewicons'       : 'Ver como iconos',
			'places'          : 'Lugares',
			'calc'            : 'Calcular', 
			'path'            : 'Ruta',
			'aliasfor'        : 'Alias para',
			'locked'          : 'Bloqueado',
			'dim'             : 'Dimensiones',
			'files'           : 'Archivos',
			'folders'         : 'Carpetas',
			'items'           : 'Elementos',
			'yes'             : 'si',
			'no'              : 'no',
			'link'            : 'Enlace',
			'searcresult'     : 'Resultados de la búsqueda',  
			'selected'        : 'elementos seleccionados',
			'about'           : 'Acerca',
			'shortcuts'       : 'Accesos directos',
			'help'            : 'Ayuda',
			'webfm'           : 'Administrador de archivos web',
			'ver'             : 'Version',
			'protocolver'     : 'versión del protocolo',
			'homepage'        : 'Inicio',
			'docs'            : 'Documentación',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Síguenos en Twitter',
			'facebook'        : 'Únete a nosotros en Facebook',
			'team'            : 'Equipo',
			'chiefdev'        : 'desarrollador principal',
			'developer'       : 'desarrollador',
			'contributor'     : 'contribuyente',
			'maintainer'      : 'mantenedor',
			'translator'      : 'traductor',
			'icons'           : 'Iconos',
			'dontforget'      : 'y no olvide traer su toalla',
			'shortcutsof'     : 'Accesos directos desactivados',
			'dropFiles'       : 'Arrastre archivos aquí',
			'or'              : 'o',
			'selectForUpload' : 'Seleccione archivos para subir',
			'moveFiles'       : 'Mover archivos',
			'copyFiles'       : 'Copiar archivos',
			'rmFromPlaces'    : 'Eliminar en sus ubicaciones',
			'aspectRatio'     : 'Aspect ratio',
			'scale'           : 'Scale',
			'width'           : 'Width',
			'height'          : 'Height',
			'resize'          : 'Redimensionar',
			'crop'            : 'Recortar',
			'rotate'          : 'Rotate',
			'rotate-cw'       : 'Rotate 90 degrees CW',
			'rotate-ccw'      : 'Rotate 90 degrees CCW',
			'degree'          : '°',
			'netMountDialogTitle' : 'Mount network volume',
			'protocol'        : 'Protocol',
			'host'            : 'Host',
			'port'            : 'Port',
			'user'            : 'User',
			'pass'            : 'Password',
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Desconocido',
			'kindFolder'      : 'Carpeta',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Alias roto',
			// applications
			'kindApp'         : 'Aplicación',
			'kindPostscript'  : 'Documento Postscript',
			'kindMsOffice'    : 'Documento Microsoft Office',
			'kindMsWord'      : 'Documento Microsoft Word',
			'kindMsExcel'     : 'Documento Microsoft Excel',
			'kindMsPP'        : 'Presentación Microsoft Powerpoint',
			'kindOO'          : 'Documento Open Office',
			'kindAppFlash'    : 'Aplicación Flash',
			'kindPDF'         : 'Documento PDF',
			'kindTorrent'     : 'Archivo Bittorrent',
			'kind7z'          : 'Archivo 7z',
			'kindTAR'         : 'Archivo TAR',
			'kindGZIP'        : 'Archivo GZIP',
			'kindBZIP'        : 'Archivo BZIP',
			'kindXZ'          : 'Archivo XZ',
			'kindZIP'         : 'Archivo ZIP',
			'kindRAR'         : 'Archivo RAR',
			'kindJAR'         : 'Archivo Java JAR',
			'kindTTF'         : 'Fuente True Type',
			'kindOTF'         : 'Fuente Open Type',
			'kindRPM'         : 'Paquete RPM',
			// texts
			'kindText'        : 'Documento de texto',
			'kindTextPlain'   : 'Texto plano',
			'kindPHP'         : 'Código PHP',
			'kindCSS'         : 'Hoja de estilo CSS',
			'kindHTML'        : 'Documento HTML',
			'kindJS'          : 'Código Javascript',
			'kindRTF'         : 'Documento RTF',
			'kindC'           : 'Código C source',
			'kindCHeader'     : 'Código C header',
			'kindCPP'         : 'Código C++',
			'kindCPPHeader'   : 'Código C++ header',
			'kindShell'       : 'Script Unix shell',
			'kindPython'      : 'Código Python',
			'kindJava'        : 'Código Java',
			'kindRuby'        : 'Código Ruby',
			'kindPerl'        : 'Código Perl',
			'kindSQL'         : 'SCódigo QL',
			'kindXML'         : 'Documento XML',
			'kindAWK'         : 'Código AWK source',
			'kindCSV'         : 'Documento CSV (valores separados por comas)',
			'kindDOCBOOK'     : 'Documento Docbook XML',
			// images
			'kindImage'       : 'Imagen',
			'kindBMP'         : 'Imagen BMP',
			'kindJPEG'        : 'Imagen JPEG',
			'kindGIF'         : 'Imagen GIF',
			'kindPNG'         : 'Imagen PNG',
			'kindTIFF'        : 'Imagen TIFF',
			'kindTGA'         : 'Imagen TGA',
			'kindPSD'         : 'Imagen Adobe Photoshop',
			'kindXBITMAP'     : 'Imagen X bitmap',
			'kindPXM'         : 'Imagen Pixelmator',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'Audio MPEG',
			'kindAudioMPEG4'  : 'Audio MPEG-4',
			'kindAudioMIDI'   : 'Audio MIDI',
			'kindAudioOGG'    : 'Audio Ogg Vorbis',
			'kindAudioWAV'    : 'Audio WAV',
			'AudioPlaylist'   : 'Playlist MP3',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'Video DV',
			'kindVideoMPEG'   : 'Video MPEG',
			'kindVideoMPEG4'  : 'Video MPEG-4',
			'kindVideoAVI'    : 'Video AVI',
			'kindVideoMOV'    : 'Video Quick Time',
			'kindVideoWM'     : 'Video Windows Media',
			'kindVideoFlash'  : 'Video Flash',
			'kindVideoMKV'    : 'Video Matroska MKV',
			'kindVideoOGG'    : 'Video Ogg'
		}
	};
}

