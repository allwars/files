<%--
/**
 *******************************************************************************
 * FILE: /WEB-INF/jsp/support/micro.jsp
 * Desc : Sample 
 *
 * PROJ : LG.com 5.0
 *******************************************************************************
 *                  Modification History
 *******************************************************************************
 * CSR No.      DATE              AUTHOR             DESCRIPTION
 *******************************************************************************
 *           2019/xx/xx          xxxxxxxx           Initial Release
 *******************************************************************************
 **/
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/gpCommon/includes/doctype.jsp"%>
<%@ include file="/WEB-INF/jsp/gpCommon/includes/pageTop.jsp"%>
<head>

<!-- Google Tag Manager code -->

<script src="/es/posventa/js/google-tag-manager.js" defer></script>
<script src="/es/posventa/js/customjs.js" defer></script>

	<!-- default code -->
	<c:set var="headerTitle"><global:message mode="hidden" code="home-seo-metatag-title" text="home-seo-metatag-title"/></c:set>
	<c:set var="headerKeywords"><global:message mode="hidden" code="home-seo-metatag-keywords" text="home-seo-metatag-keywords"/></c:set>
	<c:set var="headerDescription"><global:message mode="hidden" code="home-seo-metatag-description" text="home-seo-metatag-description"/></c:set>
	<c:import url="/WEB-INF/jsp/gpCommon/includes/headerDefault.jsp" charEncoding="utf-8">
		<c:param name="title" value="${headerTitle}" />
		<c:param name="keywords" value="${headerKeywords}" />
		<c:param name="description" value="${headerDescription}" />
		<c:param name="robots" value="${headerRobots}" />
		<c:param name="canonical" value="${headerCanonical}" />
		<c:param name="ogImage" value="${ogImage}" />
	</c:import>
	<!-- // default code -->

	<!-- css -->
	<link href="/lg5-common-gp/css/support-default.min.css" type="text/css" rel="stylesheet">
	<link href="/lg5-common-gp/css/support-home.min.css" type="text/css" rel="stylesheet">	
	<link href="/lg5-common-gp/css/support-solutions.min.css" type="text/css" rel="stylesheet">
	
	
	<link href="/es/posventa/css/custom_css.css" type="text/css" rel="stylesheet">
	<!-- //css -->
	
	<jsp:include page="/WEB-INF/jsp/gpCommon/includes/headerScript.jsp" />

</head>
<body>

<noscript src="/es/poventa/js/google-tag-manager-nscript.js" defer></noscript>

	<c:import url="/WEB-INF/jsp/gpCommon/includes/bodyTop.jsp" charEncoding="utf-8">
		<c:param name="title" value="${headerTitle}" />
		<c:param name="keywords" value="${headerKeywords}" />
		<c:param name="description" value="${headerDescription}" />
		<c:param name="canonical" value="${headerCanonical}" />
		<c:param name="image" value="${ogImage}" />
	</c:import>
<!-- b2c or b2b -->
<!-- component (navigation) Mobile = ${isMobile} -->
	<jsp:include page="/${localeCd}/support/retrieveGnbHtml" >
		<jsp:param name="isMobile" value="${isMobile}" />
		<jsp:param name="bizType" value="${bizType}" />
		<jsp:param name="siteType" value="CST" />
	</jsp:include>
<!--
	breadcrumb : compare, search result 페이지에서는 사용하지 않습니다.  
-->
	<jsp:include page="/${localeCd}/commonmodule/breadcrumb" >
		<jsp:param name="bizType" value="B2C" />
	</jsp:include>
<!-- // breadcrumb -->
						<!-- // component (navigation) -->
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<!-- none-component contents -->
			<div class="support-wrap">
				<!-- Contents Area Start -->
 <div class="wrapper">
<!-- fluid container start  -->
<div class="fluid container" id="content">
<div class="row mpo-header">
<div class="span12">
<div class="mpo-header-h1">
<h1 class="hasGroup">Guías y Soluciones</h1>
</div>
<div class="subnavi-icon"></div><div class="share" id="shareClick" style="margin-right:10px;">
<!-- LGEES-2638 START-->
<!-- LGEES-2638 END-->
<!-- LGEES-2535 -->
<div class="shareload" data-url="/es/lgcompf4/support/share/snsList.lg?systemFlag=CS&amp;longUrl=http://www.lg.com/es/posventa/microsites/index-guias-faq&amp;imageUrl=http://www.lg.com/es/mp-common/images/common/lg-logo-fb.png&amp;micrositeFlag=Y"></div>
<!-- LGEES-2535 END -->
</div>
</div>
</div>
<div class="row-wrap" mobile="nonmobile">
<div class="mpo-fix-navi">
<ul>
<li class="current" style="width:118px"> <a class="current" href="index-guias-faq" target="_parent">Inicio</a></li>
<li style="width:118px"> <a href="television/index-guias-faq" target="_parent">Televisor</a></li>
<li style="width:118px"> <a href="movil/index-guias-faq" target="_parent">Móvil</a></li>
<li style="width:118px"> <a href="audio-video/index-guias-faq" target="_parent">Audio/Vídeo/PC</a></li>
<li style="width:118px"> <a href="frigorifico/index-guias-faq" target="_parent">Frigoríficos</a></li>
<li style="width:118px"> <a href="lavado-secado/index-guias-faq" target="_parent">Lavado/Secado</a></li>
<li style="width:118px"> <a href="hombot/index-guias-faq" target="_parent">Hombot</a></li>
<li style="width:118px"> <a href="climatizacion/index-guias-faq" target="_parent">Climatización</a></li>
</ul>
</div>
</div>
<!--  Page contents Start -->
<div class="mpo-container container-fluid nonmobile" id="container" mobile="nonmobile">
<div class="row-wrap">
<div class="row-fluid">
<div class="span12 mpo-area ">
<div class="mpo-module " data-padding-top="10">
<div class="mpo-space-10"></div>
</div>
</div>
</div>
</div>
<div class="row-wrap">
<div class="row-fluid">
<div class="span4 mpo-area ">
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-image mpo-media">
<span class="loader"><a href="movil/index-guias-faq" target="_parent"><img alt="moviles lg, guías y soluciones, faq" src="/es/mp-resources/images/posventa/microsites/index-guias-faq/2_1.png"/></a></span>
</div>
</div>
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-basic mpo-tb-nomedia">
<div class="mpo-desc-grp" mode="preview">
<div class="mpo-desc">
<p style="text-align: center;"><a href="movil/index-guias-faq" target="_parent"><strong>Móvil</strong></a></p>
<ul>
<li><a href="../guias-y-soluciones/movil/lentitud-contactos" target="_parent">Lentitud de contactos</a></li>
<li><a href="../guias-y-soluciones/movil/g7-camara-nuevas-caracteristicas-y-funciones" target="_parent">G7: Cámara, nuevas características</a></li>
<li><a href="../guias-y-soluciones/movil/v30-componentes-y-colores" target="_parent">V30: diseño, componentes y colores</a></li>
<li><a href="../guias-y-soluciones/movil/g6-lector-sensor-huella-dactilar" target="_parent">G6: sensor de huella dactilar</a></li>
<li><a href="../guias-y-soluciones/movil/cambiar-de-telefono" target="_parent">Cambiar de teléfono</a></li>
<li><a href="movil/index-guias-faq" target="_parent">Ver más...</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="span4 mpo-area ">
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-image mpo-media">
<span class="loader"><a href="television/index-guias-faq" target="_parent"><img alt="lg-guias-y-soluciones-televisor" src="/es/mp-resources/images/posventa/microsites/index-guias-faq/lg-guias-y-soluciones-televisor_2.jpg"/></a></span>
</div>
</div>
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-basic mpo-tb-nomedia">
<div class="mpo-desc-grp" mode="preview">
<div class="mpo-desc">
<p style="text-align: center;"><a href="television/index-guias-faq" target="_parent"><strong>Televisor</strong></a></p>
<ul>
<li><a href="https://www.lg.com/es/posventa/microsites/television/aplicacion-disney+" target="_parent">Aplicación Disney+</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/television/bajada-volumen-mute" target="_parent">Bajada de volumen a 0</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/television/control-parental" target="_parent">Activar/Desactivar control parental</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/television/imagen-recortada-zoom-ajustar-relacion-de-aspecto" target="_parent">Relación de aspecto</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/television/webos-3-5-funcion-magic-link" target="_parent">Función Magic Link</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/television/webos-3-5-funcion-quick-access" target="_parent">Función Quick Access</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/television/mando-magic-control-an-mr650a-webos-2017" target="_parent">Magic Control 2017 AN-MR650A</a></li>
<li><a href="television/index-guias-faq" target="_parent">Ver más...</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="span4 mpo-area ">
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-image mpo-media">
<span class="loader"><a href="audio-video/index-guias-faq" target="_parent"><img alt="lg-guias-y-soluciones-audio-video-pc" src="/es/mp-resources/images/posventa/microsites/index-guias-faq/lg-guias-y-soluciones-audio-video-pc.jpg"/></a></span>
</div>
</div>
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-basic mpo-tb-nomedia">
<div class="mpo-desc-grp" mode="preview">
<div class="mpo-desc">
<p style="text-align: center;"><a href="audio-video/index-guias-faq" target="_parent"><strong>Audio/Vídeo/PC</strong></a></p>
<ul>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/audio-video/barra-sonido-actualizar-software" target="_parent">Actualizar SW barra de sonido</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/informatica/drivers-controladores-windows-10" target="_parent">Drivers Windows 10</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/informatica/solucion-problemas-grabadoras" target="_parent">FAQ: grabadoras</a></li>
<li><a href="audio-video/barra-sonido-conectar-subwoofer" target="_parent">Barra sonido: conexión de subwoofer</a></li>
<li><a href="monitor/ultrawide-4-screen-split" target="_parent">Monitor Ultrawide: 4 Screen Split</a></li>
<li><a href="monitor/modelos-compatibles-orange-tv" target="_parent">Compatibilidad con Orange TV</a></li>
<li><a href="audio-video/index-guias-faq" target="_parent">Ver más...</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="row-wrap">
<div class="row-fluid">
<div class="span4 mpo-area ">
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-image mpo-media">
<span class="loader"><a href="frigorifico/index-guias-faq" target="_parent"><img alt="lg-guias-y-soluciones-frigorifico" src="/es/mp-resources/images/posventa/microsites/index-guias-faq/lg-guias-y-soluciones-frigorifico.jpg"/></a></span>
</div>
</div>
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-basic mpo-tb-nomedia">
<div class="mpo-desc-grp" mode="preview">
<div class="mpo-desc">
<p style="text-align: center;"><a href="frigorifico/index-guias-faq" target="_parent"><strong style="text-align: center;">Frigorífico</strong></a></p>
<ul>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/frigorifico/indice-errores-panel-de-control" target="_parent">Códigos de Error</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/frigorifico/puesta-en-marcha-de-nevera-nueva" target="_parent">Puesta en marcha</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/frigorifico/electricidad-estatica-y-descargas-de-corriente" target="_parent">Electricidad estática</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/frigorifico/como-usar-el-panel-de-control" target="_parent">Uso del panel de control</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/frigorifico/enfria-demasiado-se-congelan-alimentos-o-verduras" target="_parent">Congela verduras y frutas</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/frigorifico/alarma-por-alta-temperatura" target="_parent">Alarma por alta temperatura</a></li>
<li><a href="frigorifico/index-guias-faq" target="_parent">Ver más...</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="span4 mpo-area ">
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-image mpo-media">
<span class="loader"><a href="lavado-secado/index-guias-faq" target="_parent"><img alt="lg-guias-y-soluciones-lavadora-secadora" src="/es/mp-resources/images/posventa/microsites/index-guias-faq/lg-guias-y-soluciones-lavadora-secadora.jpg"/></a></span>
</div>
</div>
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-basic mpo-tb-nomedia">
<div class="mpo-desc-grp" mode="preview">
<div class="mpo-desc">
<p style="text-align: center;"><a href="lavado-secado/index-guias-faq" target="_parent"><strong>Lavado/Secado</strong></a></p>
<ul>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/lavado-secado/cambiar-idioma-menu-pantalla-display" target="_parent">Cambiar el idioma</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/lavado-secado/lavadora-centum-aplicacion-control-remoto" target="_parent">App Centum control remoto</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/lavado-secado/secadora-restos-de-humedad-en-la-ropa" target="_parent">No seca completamente</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/lavado-secado/lavadora-no-carga-agua-o-lo-hace-lentamente" target="_parent">No carga agua o lo hace lento</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/lavado-secado/lavadora-se-alarga-duracion-lavado" target="_parent">Tarda más de lo esperado</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/lavado-secado/lavadora-exceso-de-espuma-en-aclarado" target="_parent">Exceso/restos de espuma</a></li>
<li><a href="lavado-secado/index-guias-faq" target="_parent">Ver más...</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="span4 mpo-area ">
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-image mpo-media">
<span class="loader"><a href="hombot/index-guias-faq" target="_parent"><img alt="lg-guias-y-soluciones-hombot" src="/es/mp-resources/images/posventa/microsites/index-guias-faq/lg-guias-y-soluciones-hombot.jpg"/></a></span>
</div>
</div>
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-basic mpo-tb-nomedia">
<div class="mpo-desc-grp" mode="preview">
<div class="mpo-desc">
<p style="text-align: center;"><a href="hombot/index-guias-faq" target="_parent"><strong style="text-align: center;">Hombot</strong></a></p>
<ul>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/hombot/cambiar-filtro-hepa-esponja-deposito-polvo" target="_parent">Cambiar los filtros</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/hombot/como-averiguar-direccion-mac-wifi" target="_parent">Averiguar dirección MAC</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/hombot/no-carga" target="_parent">No carga</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/hombot/el-robot-no-se-enciende" target="_parent">No funciona o no se enciende</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/hombot/limpieza-cepillos-laterales" target="_parent">Limpieza cepillos laterales</a></li>
<li><a href="http://www.lg.com/es/posventa/guias-y-soluciones/hombot/cambiar-bateria" target="_parent">Cambiar la batería</a></li>
<li><a href="hombot/index-guias-faq" target="_parent">Ver más...</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="row-wrap">
<div class="row-fluid">
<div class="span4 mpo-area ">
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-image mpo-media">
<span class="loader"><a href="climatizacion/index-guias-faq" target="_parent"><img alt="lg-guias-y-soluciones-aire-acondicionado" src="/es/mp-resources/images/posventa/microsites/index-guias-faq/lg-guias-y-soluciones-aire-acondicionado.jpg"/></a></span>
</div>
</div>
<div class="mpo-module " data-padding-top="10">
<div class="mpo-type-basic mpo-tb-nomedia">
<div class="mpo-desc-grp" mode="preview">
<div class="mpo-desc">
<p style="text-align: center;"><a href="climatizacion/index-guias-faq" target="_parent"><strong>Climatización</strong></a></p>
<ul>
<li><a href="climatizacion/requisitos-instalacion-equipos-aire-acondicionado" target="_parent">Nuevos requisitos para instalación</a></li>
<li><a href="climatizacion/aplicacion-smart-air-soporte-tecnico" target="_parent">App LG Smart Air</a></li>
<li><a href="http://www.lg.com/es/aire-acondicionado" target="_parent">Encuentra tu AC ideal</a></li>
<li><a href="climatizacion/ahorro-energia" target="_parent">Consejos de ahorro energético</a></li>
<li><a href="climatizacion/mantenimiento" target="_parent">Tareas de mantenimiento</a></li>
<li><a href="climatizacion/limpieza-filtros" target="_parent">Limpieza del filtro de la unidad interior</a></li>
<li><a href="climatizacion/index-guias-faq" target="_parent">Ver más...</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="span8 mpo-area ">
</div>
</div>
</div>
<div class="row-wrap">
<div class="row-fluid">
<div class="span12 mpo-area ">
<div class="mpo-module " data-padding-top="10">
<iframe allowfullscreen="" frameborder="0" height="125" src="https://www.lg.com/es/posventa/redirects/es-microsite-iframe-footer" width="100%"></iframe>
</div>
</div>
</div>
</div>
</div>
<!--  Page contents End --><!-- fluid container end -->
</div>
<script type="text/javascript">
var digitalData={};
</script>
<script type="text/javascript">_satellite.pageBottom();</script> <script type="text/javascript">brightcove.createExperiences();</script>
</div> 


				<!-- // Contents Area End -->
			</div>
			<!-- right floating bar -->
			<jsp:include page="/${localeCd}/support/commonmodule/floatingBar"/>
			<!-- // right floating bar -->


			<!-- // none-component contents -->
		</div>
		<div class="container-fluid iw_section">
			<div class="row iw_row iw_stretch">
				<div class="iw_columns col-lg-12">
					<div class="iw_component">
						<!-- component (footer) -->
						<!-- copy contents : Product Disclaimer -->

						<c:set var="seoText"><global:message mode="incontext" code="home-footer-seo" text="home-footer-seo"/></c:set>
						<c:set var="disclaimerText"><global:message mode="incontext" code="home-footer-disclaimer" text=""/></c:set>
						<c:import url="/WEB-INF/jsp/gpCommon/includes/footerSeo.jsp" charEncoding="utf-8">
							<c:param name="seo" value="${seoText}" />
							<c:param name="disclaimer" value="${disclaimerText}" />
						</c:import>
						<!--// copy contents -->

						<!-- footer main contents -->
						<jsp:include page="/${localeCd}/support/retrieveFooterHtml" >
							<jsp:param name="bizType" value="B2C" />
							<jsp:param name="siteType" value="CST" />
						</jsp:include>
						<!--// footer main contents -->

						<!-- // component (footer) -->
					</div>
				</div>
			</div>
		</div>
<!-- Fix mobile take -->


<style>

#content > div.row.mpo-header > div > div.mpo-header-h1 > h1 {
	text-align: center;
}

a {
	text-decoration: none;
}

#content > div.row.mpo-header > div {
	width: 100%;
}


@media (max-width: 768px){

.row-fluid{
	display: flex;
    flex-direction: column;
}
.span4.mpo-area {
width: 100%;
}


}
</style>




<!-- END Fix mobile take -->



	</div>
	<!-- default code -->
	<c:import url="/WEB-INF/jsp/gpCommon/includes/footerLocalScript.jsp" charEncoding="utf-8">
		<c:param name="csPageL1" value="${csPageL1}" />
		<c:param name="csPageL2" value="${csPageL2}" />
		<c:param name="csPageL3" value="${csPageL3}" />
		<c:param name="countryCd" value="${countryCd}" />
		<c:param name="languageCd" value="${languageCd}" />
		<c:param name="helpLibraryTitle" value="" />
		<c:param name="videoTutorialTitle" value="" />
		<c:param name="productSuperCategory" value="" />
		<c:param name="productCategory" value="" />
		<c:param name="productId" value="" />
		<c:param name="csProductName" value="" />
		<c:param name="pageEvent" value="" />
		<c:param name="pageDetailName" value="" />
		<c:param name="localeCode" value="${localeCode}" />
	</c:import>
	<c:import url="/WEB-INF/jsp/gpCommon/includes/footerDefault.jsp" charEncoding="utf-8" />
	<!-- // default code -->

	<script src="/lg5-common-gp/js/common-support.min.js" defer></script>
	<script src="/lg5-common-gp/library/chosen.min.js"></script>
	<script src="/lg5-common-gp/library/mCustomScrollbar.min.js" defer></script>
	<script src="/lg5-common-gp/library/modal.min.js" defer></script>
	<script src="/lg5-common-gp/js/support/right-floating-bar.min.js" defer></script>
	<script src="/lg5-common-gp/js/support/find-my-model.min.js" defer></script>
	<script src="/lg5-common-gp/js/support/notices-list.min.js" defer></script>
	<script src="/lg5-common-gp/js/support/solutions-contents.min.js" defer></script>	
	<script src="/lg5-common-gp/js/support/select-product-category-gp.min.js" defer></script>
	<script src="/lg5-common-gp/js/support/select-your-registered-products.min.js" defer></script>
	
</body>
</html>