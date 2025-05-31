import { StyleSheet } from 'react-native';

// Les imports de polices comme @import url() ne sont pas directement supportés en React Native.
// Vous devrez charger ces polices via des modules comme 'expo-font' ou 'react-native-vector-icons'
// et les utiliser ensuite dans vos styles.
// Par exemple, pour 'Encode Sans':
// import * as Font from 'expo-font';
// async function loadFonts() {
//   await Font.loadAsync({
//     'Encode Sans': require('./assets/fonts/EncodeSans-Regular.ttf'), // Assurez-vous d'avoir le fichier de police localement
//     'Sassy Frass': require('./assets/fonts/SassyFrass-Regular.ttf'), // Assurez-vous d'avoir le fichier de police localement
//   });
// }
// Appelez loadFonts() au démarrage de votre application.

const globalStyles = StyleSheet.create({
  // 1. Général
  body: { // En React Native, 'body' n'existe pas. Ces styles seraient appliqués au conteneur principal de votre application, souvent un <View>.
    backgroundColor: '#ffffff',
    color: '#666', // La propriété 'color' est pour le texte. Pour le fond, utilisez 'backgroundColor'.
    // fontFamily: 'Encode Sans', // Doit être chargé via Font.loadAsync ou similaire
    fontSize: 16,
    height: '100%', // Utilisez '100%' ou 'flex: 1' pour la hauteur
    // overflowX: 'hidden', // 'overflowX' n'existe pas en React Native, utilisez 'overflow'
  },
  h1: {
    color: '#0d233e',
    // fontFamily: 'Encode Sans',
    fontWeight: '600', // Les poids de police sont des chaînes de caractères en RN
    fontSize: 36,
  },
  h2: {
    color: '#0d233e',
    // fontFamily: 'Encode Sans',
    fontWeight: '600',
    fontSize: 32,
  },
  h3: {
    color: '#0d233e',
    // fontFamily: 'Encode Sans',
    fontWeight: '600',
    fontSize: 28,
  },
  h4: {
    color: '#0d233e',
    // fontFamily: 'Encode Sans',
    fontWeight: '600',
    fontSize: 24,
  },
  h5: {
    color: '#0d233e',
    // fontFamily: 'Encode Sans',
    fontWeight: '600',
    fontSize: 20,
  },
  h6: {
    color: '#0d233e',
    // fontFamily: 'Encode Sans',
    fontWeight: '600',
    fontSize: 16,
  },
  a: { // En React Native, les liens sont souvent des composants <Text> avec un onPress, ou des composants <Pressable>
    color: '#0d233e',
    textDecorationLine: 'none', // 'text-decoration' devient 'textDecorationLine'
    // Les transitions CSS ne sont pas directes. Utilisez l'API Animated de React Native.
  },
  // aHoverFocus: { // Les pseudo-classes :hover, :focus ne sont pas supportées directement.
  //   // Gérez l'état de survol/focus avec des composants comme `Pressable` ou `TouchableWithoutFeedback`
  //   // et des états React pour changer les styles dynamiquement.
  //   textDecorationLine: 'none',
  //   outline: 'none', // 'outline' n'existe pas en React Native
  // },
  // buttonFocus: { // Idem pour les boutons
  //   outline: 0,
  // },
  listContainer: {
    padding: 0,  // ok
    margin: 0,   // ok
    // pas de listStyle en RN, supprime cette ligne
  },
  listItem: {
    // styles pour chaque élément
    marginBottom: 8,
  },

  // 2. Classes Bootstrap (adaptées pour React Native)
  btnFocus: { // Adapté pour React Native
    shadowColor: 'transparent', // 'box-shadow' devient 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius'
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // Pour Android
  },
  btnWhite: {
    backgroundColor: '#fff',
    borderWidth: 0, // 'border: none' devient 'borderWidth: 0'
    color: '#c10037', // La couleur du texte est appliquée directement au style du texte
  },
  withdrawBtn: {
    paddingVertical: 12, // 'padding' devient 'paddingVertical' et 'paddingHorizontal'
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  btnSuccess: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00aa1c',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 5,
    color: '#00aa1c',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  // btnSuccessHoverActive: { // Les états :hover, :focus, .active ne sont pas gérés directement.
  //   // Utilisez Pressable ou TouchableOpacity avec des états React pour changer les styles.
  //   backgroundColor: '#00aa1c',
  //   color: '#fff',
  //   borderColor: '#fff',
  //   shadowColor: 'transparent',
  //   shadowOffset: { width: 0, height: 0 },
  //   shadowOpacity: 0,
  //   shadowRadius: 0,
  //   elevation: 0,
  // },
  btnPrimary: {
    backgroundColor: '#c10037',
    borderWidth: 1,
    borderColor: '#c10037',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 5,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  // btnPrimaryHoverActive: { // Idem, nécessite une gestion d'état
  //   backgroundColor: '#fff',
  //   borderColor: '#c10037',
  //   shadowColor: '#ffffff',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  //   color: '#c10037',
  // },
  btnOutlinePrimary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c10037',
    color: '#c10037',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 5,
  },
  // btnOutlinePrimaryHoverActive: { // Idem, gestion d'état
  //   backgroundColor: '#c10037',
  //   borderColor: '#c10037',
  //   shadowColor: '#c10037',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  //   color: '#fff',
  // },
  btnSecondary: {
    backgroundColor: '#f7f7ff',
    borderWidth: 1,
    borderColor: '#f7f7ff',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    color: '#68616d',
    borderRadius: 10,
  },
  // btnSecondaryHoverActive: { // Idem, gestion d'état
  //   backgroundColor: '#fff',
  //   borderColor: '#c10037',
  //   shadowColor: '#fff',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  //   color: '#c10037',
  // },
  btnDanger: {
    backgroundColor: '#f2535b',
    borderWidth: 1,
    borderColor: '#f2535b',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    color: '#fff',
    borderRadius: 10,
  },
  // btnDangerHoverActive: { // Idem, gestion d'état
  //   backgroundColor: '#fff',
  //   borderColor: '#f2535b',
  //   shadowColor: '#fff',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  //   color: '#f2535b',
  // },
  btnDangerLight: {
    backgroundColor: '#fff3f3',
    borderWidth: 1,
    borderColor: '#fff3f3',
    color: '#ff4949',
    borderRadius: 6,
  },
  // btnDangerLightHover: { // Idem, gestion d'état
  //   backgroundColor: '#fff',
  //   borderColor: '#ff4949',
  //   shadowColor: '#fff',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  //   color: '#ff4949',
  // },
  btnLightSuccess: {
    backgroundColor: '#e6f8eb',
    borderWidth: 1,
    borderColor: '#e6f8eb',
    color: '#34c85d',
    borderRadius: 6,
  },
  // btnLightSuccessHover: { // Idem, gestion d'état
  //   backgroundColor: '#fff',
  //   borderColor: '#34c85d',
  //   shadowColor: '#fff',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  //   color: '#34c85d',
  // },
  btnLightWarning: {
    backgroundColor: '#fff9e8',
    borderWidth: 1,
    borderColor: '#fff9e8',
    color: '#ffc107',
    borderRadius: 6,
  },
  // btnLightWarningHover: { // Idem, gestion d'état
  //   backgroundColor: '#fff',
  //   borderColor: '#ffc107',
  //   shadowColor: '#fff',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  //   color: '#ffc107',
  // },
  btnSecondaryOutline: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#dcdcdc',
    color: '#454545',
    borderRadius: 6,
  },
  // btnSecondaryOutlineHover: { // Idem, gestion d'état
  //   backgroundColor: '#dcdcdc',
  //   borderColor: '#dcdcdc',
  //   shadowColor: '#dcdcdc',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  //   color: '#454545',
  // },
  bgInfoLight: {
    backgroundColor: 'rgba(2, 182, 179, 0.12)',
    color: '#1db9aa',
  },
  bgPrimaryLight: {
    backgroundColor: 'rgba(17, 148, 247, 0.12)',
    color: '#2196f3',
  },
  bgDangerLight: {
    backgroundColor: 'rgba(242, 17, 54, 0.12)',
    color: '#e63c3c',
  },
  bgWarningLight: {
    backgroundColor: 'rgba(255, 152, 0, 0.12)',
    color: '#f39c12',
  },
  bgSuccess: {
    backgroundColor: '#28a745',
  },
  bgSuccessLight: {
    backgroundColor: 'rgba(15, 183, 107, 0.12)',
    color: '#26af48',
  },
  bgPurpleLight: {
    backgroundColor: 'rgba(197, 128, 255, 0.12)',
    color: '#c580ff',
  },
  bgDefaultLight: {
    backgroundColor: 'rgba(40, 52, 71, 0.12)',
    color: '#283447',
  },
  textLightSuccess: {
    color: '#28a745',
  },
  textLightDanger: {
    color: '#dc3545',
  },
  formGroup: {
    marginBottom: 16, // 1rem = 16px
  },
  label: { // En React Native, les labels sont souvent des composants <Text>
    display: 'flex', // 'inline-block' devient 'flex' ou 'none' si non nécessaire
    marginBottom: 8, // 0.5rem = 8px
  },
  formControl: {
    borderColor: '#dcdcdc',
    color: '#333',
    fontSize: 15,
    minHeight: 46,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderWidth: 1, // Ajouté pour correspondre à 'border-color'
  },
  // formControlFocus: { // Idem, gestion d'état
  //   borderColor: '#bbb',
  //   shadowColor: 'transparent',
  //   shadowOffset: { width: 0, height: 0 },
  //   shadowOpacity: 0,
  //   shadowRadius: 0,
  //   elevation: 0,
  //   outline: 'none',
  // },
  breadcrumbTitleH2: {
    fontWeight: '500',
    fontSize: 25,
    margin: 0,
  },
  breadcrumbTitleSpan: {
    fontSize: 13,
    color: '#8d8d8d',
    marginTop: 9,
  },
  breadcrumbsContainer: {
    flexDirection: 'row',           // aligner les éléments horizontalement
    justifyContent: 'flex-end',     // pour aligner à droite (équivalent float: right)
    padding: 0,
    margin: 0,
  },
  breadcrumbItem: {
    marginLeft: 8,
    // style texte etc.
  },
  breadcrumbsLi: {
    // float: 'left', // 'float' n'existe pas en React Native
    margin: 0,
    position: 'relative',
    paddingHorizontal: 11,
  },
  breadcrumbsLiA: {
    // float: 'left',
    fontSize: 13,
    color: '#8d8d8d',
  },
  // breadcrumbsLiBefore: { // Les pseudo-éléments ::before, ::after ne sont pas supportés directement.
  //   // Vous devrez utiliser des composants <Text> ou <View> supplémentaires pour simuler le contenu.
  //   position: 'absolute',
  //   right: -3,
  //   top: '50%',
  //   content: '>',
  //   fontSize: 10,
  //   color: '#8d8d8d',
  //   lineHeight: 10,
  //   marginTop: -3,
  // },
  // breadcrumbsLiLastChild: {
  //   paddingRight: 0,
  // },
  // breadcrumbsLiLastChildBefore: {
  //   display: 'none',
  // },
  pagination: {
    width: '100%',
    textAlign: 'center',
    marginTop: 40,
  },
  paginationUl: {
    width: '100%',
    textAlign: 'center',
    margin: 0,
  },
  paginationUlLi: {
    display: 'flex', // 'inline-block' devient 'flex'
    marginHorizontal: 1,
  },
  paginationUlLiA: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8ecec',
    lineHeight: 34, // Utilisez 'lineHeight' pour le texte
    fontSize: 13,
    color: '#8d8d8d',
    textAlign: 'center', // Centrer le texte dans le bouton
    justifyContent: 'center', // Centrer le contenu verticalement
    alignItems: 'center', // Centrer le contenu horizontalement
  },
  paginationUlLiSpan: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8ecec',
    lineHeight: 34,
    fontSize: 13,
    color: '#8d8d8d',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationUlLiArrowA: {
    backgroundColor: '#f1f1f1',
    fontSize: 17,
    marginHorizontal: 9,
  },
  paginationUlLiActiveA: {
    backgroundColor: '#c10037',
    borderColor: '#c10037',
    color: '#fff',
  },
  navPillsNavLinkActive: {
    color: '#fff',
    backgroundColor: '#c10037',
    borderWidth: 1,
    borderColor: '#c10037',
  },
  // navPillsNavLinkActiveHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   color: '#fff',
  // },
  navPillsNavLink: {
    borderRadius: 0.25 * 16, // Convertir rem en px
    color: '#c10037',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c10037',
  },
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#ebedf0',
    borderRadius: 10,
    marginBottom: 24,
  },
  textDanger: {
    color: '#ff0000',
  },

  // 3. Avatar
  avatar: {
    position: 'relative',
    display: 'flex', // 'inline-block' devient 'flex'
    width: 3 * 16, // 3rem = 48px
    height: 3 * 16,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // 'object-fit' devient 'resizeMode'
  },
  avatarTitle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#20c0f3',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // avatarStatusBefore: { // Pseudo-éléments non supportés directement
  //   position: 'absolute',
  //   right: 0,
  //   bottom: 0,
  //   width: '25%',
  //   height: '25%',
  //   borderRadius: 50,
  //   content: '',
  //   borderWidth: 2,
  //   borderColor: '#fff',
  // },
  avatarOnlineBefore: { // Vous devrez créer un composant séparé pour l'indicateur de statut
    backgroundColor: '#0c9e6f',
  },
  avatarOfflineBefore: {
    backgroundColor: '#ff0100',
  },
  avatarAwayBefore: {
    backgroundColor: '#ffbc34',
  },
  avatarBorder: {
    borderWidth: 3,
  },
  avatarRounded: {
    borderRadius: 6,
  },
  avatarTitleText: { // Appliquer ce style à un <Text> à l'intérieur de avatarTitle
    fontSize: 18,
  },
  avatarXs: {
    width: 29,
    height: 29,
  },
  avatarXsBorder: {
    borderWidth: 2,
  },
  avatarXsRounded: {
    borderRadius: 4,
  },
  avatarXsTitle: {
    fontSize: 12,
  },
  avatarXsStatusBefore: {
    borderWidth: 1,
  },
  avatarSm: {
    width: 2.5 * 16,
    height: 2.5 * 16,
  },
  avatarSmBorder: {
    borderWidth: 3,
  },
  avatarSmRounded: {
    borderRadius: 4,
  },
  avatarSmTitle: {
    fontSize: 15,
  },
  avatarSmStatusBefore: {
    borderWidth: 2,
  },
  avatarLg: {
    width: 3.75 * 16,
    height: 3.75 * 16,
  },
  avatarLgBorder: {
    borderWidth: 3,
  },
  avatarLgRounded: {
    borderRadius: 8,
  },
  avatarLgTitle: {
    fontSize: 24,
  },
  avatarLgStatusBefore: {
    borderWidth: 3,
  },

  // 4. Nav Tabs
  navTabs: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  navTabsLiA: {
    marginRight: 0,
    color: '#888',
    borderRadius: 0,
  },
  // navTabsLiAHoverFocus: { // Gestion d'état
  //   borderColor: 'transparent',
  //   color: '#272b41',
  // },
  navTabsSolidLiA: {
    color: '#272b41',
  },
  navTabsSolidActiveA: {
    backgroundColor: '#c10037',
    borderColor: '#c10037',
    color: '#fff',
  },
  tabContent: {
    paddingTop: 20,
  },
  navTabsNavLink: {
    borderRadius: 0,
  },
  // navTabsNavLinkFocusHover: { // Gestion d'état
  //   backgroundColor: '#eee',
  //   borderColor: 'transparent',
  //   color: '#272b41',
  // },
  // navLinkFocusHover: { // Gestion d'état
  //   color: '#858585',
  // },
  navTabsJustifiedLiA: { // 'justify-content: space-between' pour simuler 'justified' sur le conteneur parent
    borderRadius: 0,
    marginBottom: 0,
  },
  // navTabsJustifiedLiAHoverFocus: { // Gestion d'état
  //   borderBottomColor: '#ddd',
  // },
  navTabsJustifiedNavTabsSolidLiA: {
    borderColor: 'transparent',
  },
  navTabsSolidNavTabsRounded: {
    borderRadius: 50,
  },
  navTabsSolidNavTabsRoundedLiA: {
    borderRadius: 50,
  },
  navTabsSolidNavTabsRoundedLiActiveA: {
    borderRadius: 50,
  },
  navTabsJustifiedNavTabsTop: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navTabsJustifiedNavTabsTopLiA: {
    borderTopWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  navTabsTopLi: {
    marginBottom: 0,
  },
  // navTabsTopLiOpenAHoverFocus: { // Gestion d'état
  //   borderTopColor: '#ddd',
  // },
  navTabsTopLiPlusLiA: {
    marginLeft: 1,
  },
  navTabsTopLiActiveA: {
    borderTopColor: '#c10037',
  },
  navTabsBottomLiActiveA: {
    borderBottomWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: '#c10037',
    backgroundColor: 'transparent',
    // Les transitions CSS ne sont pas directes.
  },
  navTabsSolid: {
    backgroundColor: '#fafafa',
    borderWidth: 0,
  },
  navTabsSolidLi: {
    marginBottom: 0,
  },

  // navTabsSolidLiAHoverFocus: { // Gestion d'état
  //   backgroundColor: '#f5f5f5',
  // },
  // navTabsSolidOpenNotActiveA: { // Gestion d'état
  //   backgroundColor: '#f5f5f5',
  //   borderColor: 'transparent',
  // },

  // 5. Table (Les tables en React Native sont simulées avec des View et Text)
  tableBodyTd: {
    padding: 15,
    fontSize: 14,
  },
  tableTh: {
    padding: 15,
    fontSize: 14,
    verticalAlign: 'middle', // 'vertical-align' devient 'verticalAlign'
    // whiteSpace: 'nowrap', // 'white-space' devient 'whiteSpace'
  },
  // tableNotFirstChild: { // Sélecteur CSS non direct
  //   borderTopWidth: 0,
  // },
  tableTdH2: {
    display: 'flex', // 'inline-block' devient 'flex'
    fontSize: 16, // 'inherit' n'est pas direct, utilisez une valeur explicite
    fontWeight: '400',
    margin: 0,
    padding: 0,
    verticalAlign: 'middle',
  },
  tableTdH2TableAvatar: {
    alignItems: 'center',
    display: 'flex', // 'inline-flex' devient 'flex'
    fontSize: 16,
    fontWeight: '400',
    margin: 0,
    padding: 0,
    verticalAlign: 'middle',
    // whiteSpace: 'nowrap',
  },
  tableTdH2A: {
    fontWeight: '500',
    fontSize: 16,
    color: '#374b5c',
  },
  // tableTdH2AHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  tableTdH2Span: {
    color: '#888',
    display: 'flex', // 'block' devient 'flex'
    fontSize: 12,
    marginTop: 5,
  },
  // dataTableTheadSortingBefore: { // Pseudo-éléments non supportés. Utilisez des icônes de police ou des composants SVG.
  //   right: 16, // 1em = 16px
  //   content: '\uf0de',
  //   fontFamily: 'Font Awesome 5 Free',
  // },
  // dataTablesPaginatePreviousNext: { // Non applicable, pagination gérée par des composants
  //   display: 'none',
  // },
  tablelengthLabel: {
    fontWeight: '500',
    fontSize: 14,
    color: '#68616d',
  },
  tablelengthLabelSelect: {
    width: 'auto',
    display: 'flex', // 'inline-block'
    borderWidth: 0.5,
    borderColor: '#68616d',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    minHeight: 'auto',
    color: '#68616d',
    marginHorizontal: 8,
  },
  tablepaginationUl: {
    margin: 0,
  },
  tableIngopage: {
    display: 'flex',
    justifyContent: 'flex-end', // 'end' devient 'flex-end'
    alignItems: 'center',
  },
  tableIngopageDataTablesInfo: {
    fontWeight: '500',
    fontSize: 14,
    color: '#68616d',
    marginRight: 10,
  },

  // 6. Modal (Les modales en React Native utilisent le composant Modal)
  customModalModalHeader: {
    padding: 20,
  },
  customModalModalBody: {
    padding: 20,
  },
  customModalModalContent: {
    borderRadius: 10,
    borderWidth: 0,
  },
  customModalCloseBtn: {
    backgroundColor: '#f1f1f1',
    borderWidth: 0,
    borderRadius: 50,
    color: '#4f4f4f',
    fontSize: 15,
    width: 29,
    height: 29,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    opacity: 1,
    padding: 0,
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 99,
  },
  // customModalCloseBtnHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   color: '#fff',
  // },

  // 7. Header (Les en-têtes sont des composants View avec des styles)
  header: {
    backgroundColor: '#fff',
    position: 'absolute', // 'fixed' devient 'absolute' en RN, souvent combiné avec zIndex
    shadowColor: 'rgba(202, 202, 202, 0.2)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 40, // Pour Android
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 9999,
    // Transitions gérées par Animated API
  },
  headerFixed: { // Gestion d'état pour le défilement
    backgroundColor: '#fff',
    shadowColor: 'rgb(197, 197, 197)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 53,
    elevation: 53,
  },
  logoA: {
    // float: 'left', // Non applicable
  },
  logoAImg: {
    // float: 'left', // Non applicable
    maxHeight: 32,
  },
  headerNav: {
    alignItems: 'center',
    borderWidth: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'relative',
    height: 85,
    padding: 0,
    marginBottom: 0,
  },
  mainNav: {
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  mainNavLiA: {
    color: '#374b5c',
  },
  mainNavLiActiveA: {
    color: '#c10037',
  },
  headerTwoMainNavLiActiveA: {
    color: '#c10037',
  },
  mainNavLiSubmenuLiA: {
    display: 'flex', // 'block'
    paddingVertical: 10,
    paddingHorizontal: 15,
    // clear: 'both', // Non applicable
    // whiteSpace: 'nowrap', // Non applicable
    fontSize: 14,
    color: '#374b5c',
    width: '100%',
    position: 'relative',
  },
  mainNavLiSubmenuLi: {
    position: 'relative',
  },

  // mainNavLiAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  headerTwoMainNavLiAHover: {
    color: '#c10037',
  },
  mainNavLiLoginLink: {
    display: 'none',
  },
  headerNavbarRht: {
    margin: 0,
    padding: 0,
  },
  headerNavbarRhtLi: {
    alignItems: 'center',
    display: 'flex', // 'inline-flex'
    paddingRight: 15,
    justifyContent: 'center',
  },
  headerNavbarRhtLiLastChild: {
    paddingRight: 0,
  },
  headerNavbarRhtLiDropdownMenu: {
    borderWidth: 0,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  headerNavbarRhtLiFaBell: {
    fontSize: 24,
  },
  headerNavbarRhtLiFaComments: {
    fontSize: 24,
  },
  // headerNavbarRhtDropdownToggleAfter: { // Pseudo-éléments non supportés
  //   display: 'none',
  // },
  headerNavbarRhtLiDropdownMenuItem: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 0.9375 * 16,
    fontWeight: '600',
  },
  headerNavbarRhtLiDropdownMenuItemFirstChild: {
    borderTopWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerNavbarRhtLiDropdownMenuItemLastChild: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  // headerNavbarRhtLiAHeaderLoginHoverFocus: { // Gestion d'état
  //   backgroundColor: '#fff',
  //   borderColor: '#c10037',
  //   shadowColor: '#ffffff',
  //   shadowOffset: { width: 210, height: 0 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 0,
  //   color: '#c10037',
  // },
  // headerNavbarRhtLiDropdownMenuAHover: { // Gestion d'état
  //   color: '#c10037',
  //   backgroundColor: '#fff',
  // },
  headerNavbarRhtLiAHeaderLogin: {
    backgroundColor: '#c10037',
    borderWidth: 1,
    borderColor: '#c10037',
    color: '#fff',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 4,
    paddingVertical: 11,
    paddingHorizontal: 19,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 16, // Normaliser la hauteur de ligne
  },
  headerNavbarRhtLiAHeaderLoginAddListing: {
    backgroundColor: '#374b5c',
    borderWidth: 1,
    borderColor: '#374b5c',
    display: 'flex',
    alignItems: 'center',
  },
  headerNavbarRhtLiAHeaderLoginAddListingI: {
    fontSize: 10,
    marginRight: 5,
  },
  // headerNavbarRhtLiAHeaderLoginHover: { // Gestion d'état
  //   backgroundColor: '#fff',
  //   borderColor: '#c10037',
  //   shadowColor: '#ffffff',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  //   color: '#c10037',
  // },
  // headerNavbarRhtLiAHeaderLoginAddListingHover: { // Gestion d'état
  //   borderColor: '#374b5c',
  //   color: '#374b5c',
  // },
  headerNavbarRhtLiAHeaderReg: {
    fontWeight: '600',
    color: '#374b5c',
  },
  // headerNavbarRhtLiAHeaderRegHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  gradientBtn: { // Les dégradés CSS ne sont pas directs. Utilisez 'react-native-linear-gradient'.
    // background: 'linear-gradient(180deg, #ead401 4.59%, #fe017e 95.41%)',
  },
  // gradientBtnHover: { // Gestion d'état
  //   // background: 'linear-gradient(0deg, #ead401 4.59%, #fe017e 95.41%)',
  // },
  headerNavbarRhtLiAHeaderLoginImg: {
    marginRight: 7,
  },
  // headerHasArrowDropdownToggleAfter: { // Pseudo-éléments non supportés
  //   borderTopWidth: 0,
  //   borderLeftWidth: 0,
  //   borderBottomWidth: 2,
  //   borderBottomColor: '#7e84a3',
  //   borderRightWidth: 2,
  //   borderRightColor: '#7e84a3',
  //   content: '',
  //   height: 8,
  //   display: 'flex', // 'inline-block'
  //   // pointerEvents: 'none', // Non applicable
  //   transform: [{ rotate: '45deg' }], // 'transform' en RN est un tableau d'objets
  //   width: 8,
  //   verticalAlign: 'middle', // 'vertical-align'
  //   marginRight: 10,
  // },
  // headerHasArrowDropdownToggleHoverAfter: { // Gestion d'état
  //   borderBottomColor: '#c10037',
  //   borderRightColor: '#c10037',
  // },
  // headerHasArrowDropdownToggleExpandedAfter: { // Gestion d'état
  //   transform: [{ rotate: '-135deg' }],
  //   borderBottomColor: '#c10037',
  //   borderRightColor: '#c10037',
  // },
  userMenu: {
    // float: 'right', // Non applicable
    margin: 0,
    position: 'relative',
    zIndex: 99,
  },
  headerNavLink: {
    color: '#374b5c',
    fontWeight: '600',
    textDecorationLine: 'none',
  },
  userMenuNavLiA: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 58,
    paddingHorizontal: 15,
    height: 60,
  },
  // userMenuNavLiAHoverFocus: { // Gestion d'état
  //   backgroundColor: 'rgba(0, 0, 0, 0.2)',
  // },
  // userMenuNavLiAHoverFocusI: { // Gestion d'état
  //   color: '#fff',
  // },
  userImg: {
    display: 'flex', // 'inline-block'
    position: 'relative',
  },
  userImgImg: {
    height: 40,
    resizeMode: 'cover',
    width: 40,
    borderWidth: 3,
    borderColor: '#ffffff',
    // outline: 3, // 'outline' n'existe pas
    // outlineColor: '#d9d9d9',
  },
  userMenuNavLiAMobileBtn: {
    borderWidth: 0,
    position: 'relative',
    padding: 0,
    margin: 0,
    // cursor: 'pointer', // Non applicable
  },
  headerNavbarRhtDropdownMenu: {
    minWidth: 200,
    padding: 0,
  },
  headerNavbarRhtDropdownMenuItem: {
    paddingVertical: 7,
    paddingHorizontal: 15,
  },

  // headerNavbarRhtDropdownMenuItemHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  userHeader: {
    backgroundColor: '#f9f9f9',
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  userHeaderText: {
    marginLeft: 10,
  },
  userHeaderTextH6: {
    fontSize: 15,
    marginBottom: 2,
  },
  headerNavbarRhtLoggedItemNavLink: {
    alignItems: 'center',
    display: 'flex', // 'inline-flex'
    fontSize: 14,
    height: 85,
    paddingHorizontal: 10,
    color: '#fff',
    position: 'relative',
  },
  headerNavbarRhtLoggedItemNavLinkBadge: {
    position: 'absolute',
    top: 15,
    right: 0,
  },
  headerNavbarRhtLogRhtLi: {
    marginRight: 43,
  },
  headerNavbarRhtLogRhtLiA: {
    color: '#374b5c',
    padding: 0,
  },
  // headerNavbarRhtLogRhtLiAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  headerNavbarRhtLogRhtLiLastChild: {
    marginRight: 0,
  },
  // headerDropdownToggleAfter: { // Pseudo-éléments non supportés
  //   borderTopWidth: 0,
  //   borderLeftWidth: 0,
  //   borderBottomWidth: 2,
  //   borderBottomColor: '#757575',
  //   borderRightWidth: 2,
  //   borderRightColor: '#757575',
  //   content: '',
  //   height: 8,
  //   display: 'flex', // 'inline-block'
  //   // pointerEvents: 'none',
  //   transform: [{ rotate: '45deg' }],
  //   width: 8,
  //   verticalAlign: 'middle',
  //   marginLeft: 10,
  // },
  flagNavA: {
    borderWidth: 1,
    borderColor: '#e4e4e8',
    borderRadius: 8,
    padding: 13,
  },
  flagNavDropdownItemImg: {
    marginRight: 10,
    borderRadius: 50,
  },
  headerNavbarRhtLoggedItemNavLinkRound: { // Combiné avec .headerNavbarRhtLoggedItemNavLink
    justifyContent: 'center',
    width: 41,
    height: 41,
    fontSize: 16,
    backgroundColor: '#f6f6fe',
    borderRadius: 50,
  },
  // headerNavbarRhtLoggedItemNavLinkHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   color: '#fff',
  // },
  // headerNavbarRhtLoggedItemNavLinkHoverImg: { // Gestion d'état
  //   filter: 'brightness(0) invert(1)', // 'filter' non supporté directement, nécessite une solution SVG ou image
  // },
  // headerNavbarRhtLoggedItemNavLinkAfter: { // Pseudo-éléments non supportés
  //   display: 'none',
  // },
  notiDropdownDropdownToggle: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 23,
    paddingHorizontal: 15,
  },
  // notiDropdownDropdownToggleAfter: { // Pseudo-éléments non supportés
  //   display: 'none',
  // },
  notiDropdownDropdownToggleSpan: {
    backgroundColor: '#f43f3f',
    display: 'flex', // 'block'
    fontSize: 10,
    fontWeight: 'bold',
    minHeight: 15,
    minWidth: 15,
    position: 'absolute',
    right: 3,
    top: 5,
  },
  notiDropdownDropdownToggleI: {
    // float: 'right', // Non applicable
    lineHeight: 50,
    marginLeft: 15,
    fontSize: 21,
    // float: 'left', // Non applicable
    color: '#fff',
    margin: 0,
    // cursor: 'pointer', // Non applicable
  },
  userHeaderNoti: { // Dupliqué avec userHeader
    backgroundColor: '#f9f9f9',
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  notiDropdownDropdownMenu: {
    top: 63,
    fontSize: 14,
  },
  notificationMessage: {
    marginBottom: 0,
  },
  notifications: {
    padding: 0,
  },
  notificationsNotificationTime: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 1.35 * 16, // Convertir em en px
    color: '#7e84a3',
  },
  notificationsMedia: {
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  notificationsMediaLastChild: {
    borderBottomWidth: 0,
  },
  notificationsMediaA: {
    display: 'flex', // 'block'
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 2,
  },
  // notificationsMediaAHover: { // Gestion d'état
  //   backgroundColor: '#fafafa',
  // },
  notificationsMediaAvatar: {
    marginRight: 10,
  },
  notificationsMediaListMediaLeft: {
    paddingRight: 8,
  },
  topnavDropdownHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    textAlign: 'center',
  },
  topnavDropdownHeaderFooter: {
    height: 40,
    lineHeight: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  topnavDropdownFooter: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  topnavDropdownFooterA: {
    display: 'flex', // 'block'
    textAlign: 'center',
    color: '#2f3143',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // topnavDropdownFooterAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  topnavDropdownFooterAI: {
    fontSize: 17,
    color: '#2f3143',
    marginLeft: 5,
    // Transitions gérées par Animated API
  },
  // topnavDropdownFooterAHoverI: { // Gestion d'état
  //   color: '#c10037',
  //   marginLeft: 8,
  // },
  userMenuNavLiABadge: {
    backgroundColor: '#f43f3f',
    display: 'flex', // 'block'
    fontSize: 10,
    fontWeight: 'bold',
    minHeight: 15,
    minWidth: 15,
    position: 'absolute',
    right: 3,
    top: 6,
  },
  userMenuNavLiAI: {
    fontSize: 1.5 * 16, // 1.5rem
    lineHeight: 60,
  },
  notiDetails: {
    color: '#333344',
    marginBottom: 0,
    fontWeight: '500',
  },
  notificationsNotiContent: {
    height: 290,
    width: 350,
    // overflowY: 'scroll', // 'overflowY' devient 'overflow' en React Native, et 'scroll' est le comportement par défaut pour les ScrollView
    paddingRight: 5,
    position: 'relative',
  },
  // notificationsNotiContentScrollbar: { // Les barres de défilement ne sont pas stylables directement en React Native de cette manière
  //   width: 6,
  //   backgroundColor: '#eef1fe',
  //   height: 10,
  // },
  notificationList: {
    padding: 0,
    margin: 0,
  },
  notificationsUlNotificationListLi: {
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  notificationsUlNotificationListLiLastChild: {
    borderBottomWidth: 0,
  },
  notificationsUlNotificationListLiA: {
    display: 'flex', // 'block'
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 2,
  },
  // notificationsUlNotificationListLiAHover: { // Gestion d'état
  //   backgroundColor: '#fafafa',
  // },
  notificationsUlNotificationListLiListItem: {
    borderWidth: 0,
    padding: 0,
    position: 'relative',
  },
  topnavDropdownHeaderNotificationTitle: {
    display: 'flex', // 'block'
    // float: 'left', // Non applicable
    fontWeight: '500',
  },
  topnavDropdownHeaderClearNoti: {
    color: '#f0142f',
    // float: 'right', // Non applicable
    fontSize: 13,
    textTransform: 'uppercase',
  },
  // topnavDropdownHeaderClearNotiHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  notiTime: {
    margin: 0,
  },
  flagDropdownNavLink: {
    color: '#374b5c',
    paddingVertical: 0.5 * 16, // 0.5rem
    paddingHorizontal: 0,
  },
  accountItemNavLink: {
    paddingVertical: 0.5 * 16,
    paddingHorizontal: 0,
  },
  userInfo: {
    marginLeft: 10,
  },
  userInfoH6: {
    fontWeight: '600',
    fontSize: 14,
    color: '#374b5c',
    marginBottom: 4,
  },
  userInfoP: {
    fontSize: 12,
    color: '#c10037',
    marginBottom: 0,
  },
  userInfos: {
    alignItems: 'center',
    display: 'flex', // 'inline-flex'
  },
  headerTwo: {
    position: 'relative',
    zIndex: 1040,
  },
  headerTwoHeaderNavbarRhtLiAHeaderLogin: {
    paddingVertical: 11,
    paddingHorizontal: 19,
    fontWeight: '500',
  },
  headerTwoMainNavLiA: {
    fontWeight: '500',
  },
  headerTop: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  headerTopUl: {
    textAlign: 'right',
  },
  headerTopUlLi: {
    display: 'flex', // 'inline-block'
    fontSize: 14,
    marginRight: 25,
  },
  headerTopUlLiLastChild: {
    marginRight: 0,
  },
  headerTopSelectionList: {
    justifyContent: 'flex-start',
  },
  headerTopHeaderNav: {
    height: 68,
  },
  headerTopLangSelectSelectIcon: {
    color: '#374b5c',
  },
  // headerTopSelectionListSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionArrowB: { // Sélecteurs trop complexes, non applicables
  //   borderColor: '#374b5c',
  // },
  // headerTopSelectionListSelect2ContainerDefaultSelect2ContainerOpenSelect2SelectionSingleSelect2SelectionArrowB: { // Sélecteurs trop complexes, non applicables
  //   borderColor: '#374b5c',
  // },
  // headerTopSelectionListSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionRendered: { // Sélecteurs trop complexes, non applicables
  //   color: '#374b5c',
  //   fontSize: 14,
  // },
  mainNavLiMegamenuUl: {
    width: '100%',
  },
  megamenuWrapper: {
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  singleDemo: {
    // transition: 0.4, // Gérer les transitions avec Animated API
    marginBottom: 25,
  },
  // singleDemoHover: { // Gestion d'état
  //   transform: [{ translateY: -20 }],
  // },
  singleDemoActiveDemoInfoA: {
    color: '#c10037',
  },
  singleDemoActiveDemoImg: {
    shadowColor: 'rgba(19, 16, 34, 0.1)',
    shadowOffset: { width: 0, height: 4.8 },
    shadowOpacity: 1,
    shadowRadius: 24.4,
    elevation: 24.4,
  },
  // singleDemoHoverDemoInfo: { // Gestion d'état
  //   opacity: 1,
  //   bottom: -30,
  // },
  demoInfo: {
    width: '100%',
    marginHorizontal: 'auto', // 'auto' n'est pas supporté pour marginHorizontal, utilisez 'justifyContent: center' sur le parent
    textAlign: 'center',
    zIndex: 1,
    // opacity: 0, // Gérer l'opacité avec Animated API
    marginTop: 10,
  },
  headerThree: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  headerThreeNavbarHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  headerThreeMainNavLiNotLastChild: {
    marginRight: 30,
  },
  headerThreeMainMenuWrapper: {
    marginHorizontal: 15,
    marginLeft: 'auto', // 'auto'
  },
  headerThreeHeaderNav: {
    height: 73,
  },
  headerCtaBtn: {
    backgroundColor: '#c10037',
    borderWidth: 1,
    borderColor: '#c10037',
    borderRadius: 4,
    display: 'flex',
    color: 'white',
    textTransform: 'capitalize',
    minWidth: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontWeight: '700',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },
  // headerCtaBtnHover: { // Gestion d'état
  //   backgroundColor: '#fff',
  //   borderColor: '#c10037',
  //   color: '#c10037',
  //   shadowColor: '#ffffff',
  //   shadowOffset: { width: 0, height: 70 },
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   elevation: 70,
  // },
  // headerCtaBtnHoverA: { // Gestion d'état
  //   color: '#c10037',
  // },
  headerCtaBtnA: {
    padding: 0,
    borderWidth: 0,
    color: '#fff',
    fontWeight: '700',
  },
  // headerCtaBtnAHover: { // Gestion d'état
  //   backgroundColor: 'transparent',
  // },
  headerThreeNavLinkCurLink: {
    textTransform: 'uppercase',
  },
  headerThreeNavLinkCurLinkLangLink: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
  },
  headerThreeNavLinkCurLinkILangLinkI: {
    fontSize: 12,
  },
  headerFourCtaBtn: {
    borderRadius: 4,
    minWidth: 176,
  },
  headerFourMainMenuWrapper: {
    display: 'flex',
    marginHorizontal: 15,
    marginLeft: 0,
  },
  headerFourHeaderNavbarRhtLiAHeaderLoginAddListing: {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    minWidth: 40,
  },
  headerFourHeaderNavbarRhtLiAHeaderLogin: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    fontWeight: '700',
  },
  headerFourHeaderNavbarRhtLiAHeaderLoginAddListingI: {
    fontSize: 20,
    marginRight: 0,
  },

  // 8. Mobile Menu
  sidebarOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'none',
    height: '100%',
    left: 0,
    position: 'absolute', // 'fixed'
    top: 0,
    width: '100%',
    zIndex: 1039,
    opacity: 0.6,
  },
  menuOpenedMainMenuWrapper: { // Gérer l'état d'ouverture du menu avec un style dynamique
    transform: [{ translateX: 0 }],
  },
  menuHeader: {
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    display: 'none',
  },
  menuClose: {
    fontSize: 18,
    color: '#c10037',
  },
  barIcon: {
    display: 'flex', // 'inline-block'
    width: 31,
  },
  barIconSpan: {
    backgroundColor: '#c10037',
    display: 'flex', // 'block'
    // float: 'left', // Non applicable
    height: 3,
    marginBottom: 7,
    width: 31,
    borderRadius: 2,
  },
  barIconSpanNthChild2: {
    width: 16,
  },
  barIconSpanNthChild3: {
    marginBottom: 0,
  },
  mobileBtn: {
    display: 'none',
    marginRight: 30,
  },
  // htmlMenuOpenedBody: { // Non applicable, gérez l'overflow sur le conteneur principal
  //   overflow: 'hidden',
  // },
  mainMenuWrapper: {
    marginHorizontal: 15,
  },
  navbarBrandLogoSmall: {
    display: 'none',
  },
  navbarBrandLogoSmallImg: {
    maxHeight: 40,
    width: 30,
  },

  // 9. Home
  bannerSection: {
    backgroundColor: '#f3f3f3',
    position: 'relative',
    paddingTop: 85,
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  bannerSectionP: {
    color: '#374b5c',
    marginBottom: 30,
  },
  bannerSectionPExploreTextSpan: {
    color: '#fff',
    backgroundColor: '#374b5c',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 50,
    fontSize: 18,
    display: 'flex', // 'inline-block'
  },
  sectionSearch: {
    position: 'relative',
    paddingVertical: 140,
    paddingHorizontal: 0,
  },
  bannerSectionH1: {
    fontWeight: '800',
    fontSize: 50,
    color: '#0d233e',
    marginBottom: 25,
  },
  bannerleftarrow: {
    position: 'absolute',
    top: 110,
    left: -7,
  },
  bannerSectionH1Span: {
    color: '#c10037',
  },
  bannerCircleImg: {
    // filter: 'invert(1) brightness(100)', // Non supporté directement
  },
  bannerCircle: {
    position: 'absolute',
    left: -181,
    top: 0,
    width: 300,
    height: 300,
  },
  // searchBoxSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionRendered: { // Sélecteurs trop complexes, non applicables
  //   lineHeight: 52,
  //   paddingLeft: 15,
  //   paddingRight: 25,
  //   minWidth: 227,
  //   color: '#374b5c',
  // },
  // searchBoxSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionRenderedPlaceholder: { // Non applicable, utilisez placeholderTextColor
  //   color: '#b7b7b7',
  // },
  // filterContentSelect2SelectionPlaceholder: { // Non applicable
  //   color: '#8d8d8d',
  // },
  searchBoxLabel: {
    color: '#c10037',
    fontWeight: '600',
  },
  // searchBoxSelect2ContainerDefaultSelect2SelectionSingleFilterContentSelect2ContainerDefaultSelect2SelectionSingle: { // Sélecteurs trop complexes, non applicables
  //   backgroundColor: '#fff',
  //   borderWidth: 1,
  //   borderColor: '#e3e3e3',
  //   borderRadius: 8,
  //   height: 52,
  //   minWidth: 285,
  // },
  // filterContentSelect2ContainerDefaultSelect2SelectionSingle: { // Sélecteurs trop complexes, non applicables
  //   minWidth: 'auto',
  // },
  // searchBoxSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionArrowFilterContentSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionArrow: { // Sélecteurs trop complexes, non applicables
  //   height: 47,
  //   right: 6,
  // },
  // select2ContainerSelect2Dropdown: { // Non applicable
  //   borderWidth: 1,
  //   borderColor: '#e3e3e3',
  // },
  // select2ResultsOption: { // Non applicable
  //   paddingVertical: 6,
  //   paddingHorizontal: 15,
  // },
  // searchBoxSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionArrowBFilterContentSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionArrowB: { // Sélecteurs trop complexes, non applicables
  //   position: 'absolute',
  //   top: '55%',
  //   left: '50%',
  //   borderColor: '#374b5c',
  //   borderStyle: 'solid',
  //   borderWidth: 0,
  //   borderRightWidth: 2,
  //   borderBottomWidth: 2,
  //   padding: 3,
  //   height: 0,
  //   marginLeft: -10,
  //   marginTop: -3,
  //   width: 0,
  //   transform: [{ rotate: '45deg' }, { translateY: '-50%' }],
  // },
  searchBoxSearchInput: {
    marginRight: 15,
    marginLeft: 0,
    marginBottom: 0,
  },
  searchBoxGroupImgInput: {
    paddingVertical: 14,
    paddingHorizontal: 9,
    paddingLeft: 35,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 10,
    minWidth: 196,
  },
  // searchBoxGroupImgInputPlaceholder: { // Non applicable
  //   color: '#8d8d8d',
  // },
  searchBoxGroupImgI: {
    position: 'absolute',
    top: 18,
    color: '#8d8d8d',
  },
  arrowImg: {
    position: 'absolute',
    top: 157,
    left: 'auto',
    right: 120,
  },
  bannerImgsImg: {
    maxWidth: 580,
  },
  categorySection: {
    paddingTop: 100,
    paddingBottom: 75,
    paddingHorizontal: 0,
  },
  sectionHeadingH2: {
    fontWeight: '700',
    fontSize: 36,
    color: '#0d233e',
    margin: 0,
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
  },
  sectionHeadingH2Span: {
    color: '#fff',
    backgroundColor: '#c10037',
    borderRadius: 57,
    paddingVertical: 5,
    paddingHorizontal: 2,
    fontSize: 32,
  },
  sectionHeadingH2SpanBg: { // Cette partie est complexe car elle utilise une image de fond et des propriétés de flexbox
    color: '#fff',
    backgroundColor: '#fff',
    // background: 'url(../../public/assets/img/headingred-bg.png)', // Non supporté directement, utilisez <ImageBackground>
    height: 62,
    width: 62,
    display: 'flex',
    alignItems: 'center',
    // backgroundPosition: 'center center', // Non supporté directement
    justifyContent: 'center',
  },
  sectionHeadingH2SpanTitleLeft: {
    marginLeft: 10,
  },
  sectionHeadingH2SpanTitleRight: {
    marginRight: 10,
  },
  btnView: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#c10037',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 26,
    color: '#c10037',
  },
  // btnViewHoverFocus: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   borderColor: '#c10037',
  //   color: '#fff',
  // },
  categorySectionAH5: {
    fontWeight: '700',
    color: '#0d233e',
    fontStyle: 'normal',
    margin: 0,
    marginBottom: 10,
    fontSize: 16,
  },
  searchBtnBtnPrimary: {
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 10,
    display: 'flex', // 'block'
    minWidth: 143,
  },
  searchBtnBtnPrimaryI: {
    marginRight: 5,
    marginLeft: 0,
    marginBottom: 0,
  },
  // searchBoxSelect2ContainerDefaultSelect2ContainerOpenSelect2SelectionSingleSelect2SelectionArrowB: { // Sélecteurs trop complexes
  //   borderColor: '#b7b7b7',
  //   borderWidth: 0,
  //   borderTopWidth: 2,
  //   borderLeftWidth: 2,
  //   marginTop: 3,
  //   padding: 3,
  // },
  // sortbysetSelect2ContainerDefault: { // Sélecteurs trop complexes
  //   fontSize: 14,
  // },
  // select2ContainerDefaultSelect2ResultsOptionSelected: { // Sélecteurs trop complexes
  //   fontSize: 15,
  // },
  // select2ContainerDefaultSelect2ResultsOptionHighlightedSelected: { // Sélecteurs trop complexes
  //   backgroundColor: '#c10037',
  //   color: '#fff',
  //   fontSize: 15,
  // },
  categorySectionACategoryLinks: {
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 10,
    padding: 16,
    display: 'flex', // 'inline-block'
    textAlign: 'center',
    margin: 0,
    marginBottom: 25,
    width: '100%',
  },
  // owlPrevNext: { // Non applicable, carousels gérés par des bibliothèques RN
  //   marginRight: 12,
  //   marginLeft: 0,
  //   borderWidth: 1,
  //   borderColor: '#dee2e7',
  //   borderRadius: 10,
  //   color: '#7f7f7f',
  //   backgroundColor: '#fff',
  //   width: 44,
  //   height: 44,
  // },
  // owlNext: {
  //   marginRight: 0,
  // },
  // owlPrevNextHover: { // Gestion d'état
  //   borderColor: '#c10037',
  //   color: '#fff',
  //   backgroundColor: '#c10037',
  //   shadowColor: 'rgba(19, 16, 34, 0.15)',
  //   shadowOffset: { width: 0, height: 8 },
  //   shadowOpacity: 1,
  //   shadowRadius: 18,
  //   elevation: 18,
  // },
  // owlCarouselOwlNavOwlNextOwlCarouselOwlNavOwlPrevOwlCarouselOwlDot: { // Sélecteurs trop complexes
  //   backgroundColor: 'transparent',
  //   color: 'inherit',
  //   borderWidth: 0,
  //   padding: 0,
  //   font: 'inherit',
  // },
  categorySectionACategoryLinksSpan: {
    fontSize: 14,
    fontWeight: '400',
    margin: 0,
    marginBottom: 18,
    display: 'flex', // 'block'
    color: '#666',
  },
  // categorySectionACategoryLinksHover: { // Gestion d'état
  //   backgroundColor: '#374b5c',
  //   borderColor: '#374b5c',
  // },
  // categorySectionACategoryLinksHoverH5Span: { // Gestion d'état
  //   color: '#fff',
  // },
  sectionHeading: {
    margin: 0,
    marginBottom: 50,
  },
  featuredSection: {
    backgroundColor: '#f9fafc',
    paddingVertical: 100,
    paddingHorizontal: 0,
  },
  serviceWidget: {
    borderWidth: 1,
    borderColor: '#dee2e7',
    borderRadius: 10,
    position: 'relative',
  },
  serviceWidgetFavItemGridViewFavItem: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    padding: 20,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 14,
  },
  // favItemFavIconHoverSelected: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   color: '#fff',
  // },
  pLastChild: {
    marginBottom: 0,
  },
  favItemFavIcon: {
    width: 35,
    height: 35,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  featuredText: {
    backgroundColor: '#4c82f7',
    borderRadius: 5,
    color: '#fff',
    padding: 5,
  },
  serviceContentA: {
    fontSize: 16,
    color: '#0d233e',
  },
  featuredSectionServiceContentH3: {
    width: '100%',
    // textOverflow: 'ellipsis', // Non supporté directement, utilisez numberOfLines
    overflow: 'hidden',
    // whiteSpace: 'nowrap', // Non supporté directement
  },
  // serviceContentAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  featuredSliderFeaturedInfoImg: {
    marginRight: 4,
  },
  featuredInfo: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14,
  },
  featuredInfoA: {
    fontSize: 14,
  },
  serviceContent: {
    padding: 10,
  },
  servInfo: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
    marginBottom: 0,
  },
  clearfix: {
    // clear: 'both', // Non applicable
  },
  ratingsFeaturedLocationServInfoSpan: {
    fontSize: 14,
  },
  servInfoH6: {
    color: '#c10037',
  },
  // aHoverFocusGlobal: { // Globalement géré par Animated API ou Pressable
  //   textDecorationLine: 'none',
  //   outline: 'none',
  // },
  serviceImgServImg: {
    borderRadius: 10,
    // transform: [{ translateZ: 0 }], // Non applicable
    width: '100%',
  },
  featuredInfoSpanFeatureRate: {
    backgroundColor: '#ff823b',
    color: '#fff',
    paddingVertical: 0,
    paddingHorizontal: 9,
    marginHorizontal: 6,
    borderRadius: 5,
  },
  ratingsI: {
    color: '#ff823b',
  },
  popularLocations: {
    paddingVertical: 100,
    paddingHorizontal: 0,
    backgroundColor: '#c10037',
    textAlign: 'center',
    color: '#fff',
    position: 'relative',
  },
  popularCircleimg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '14%',
    zIndex: 0,
  },
  popularcircleImgImg: {
    // filter: 'invert(1) brightness(100)', // Non supporté directement
  },
  popularLocationsSectionHeadingH2Span: {
    color: '#c10037',
    backgroundColor: '#fff',
    // background: 'url(../../public/assets/img/headingspan-bg.png)', // Non supporté directement
    height: 62,
    width: 62,
    display: 'flex',
    alignItems: 'center',
    // backgroundPosition: 'center center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 0,
  },
  popularLocationsSectionHeadingH2: {
    color: '#fff',
    justifyContent: 'center',
  },
  popularLocationsLocationInfoDetails: {
    backgroundColor: '#f9fafc',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    margin: 0,
    marginBottom: 25,
  },
  popularLocationsLocationContentP: {
    color: '#717171',
    marginBottom: 10,
    fontSize: 14,
  },
  locationInfoDetailsLocationImgImg: {
    borderRadius: 10,
  },
  locationInfoLastChild: {
    marginRight: 0,
  },
  locationDetails: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  popularLocationsLocationContent: {
    paddingLeft: 15,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: 'left',
  },
  popularLocationsLocationContentA: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0d233e',
    display: 'flex', // 'inline-block'
    margin: 0,
    marginBottom: 3,
  },
  // popularLocationsLocationContentAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  popularLocationsLocationContentAViewDetailsbtn: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    width: '100%',
    margin: 0,
    display: 'flex', // 'block'
    fontSize: 14,
    textAlign: 'center',
    color: '#374b5c',
    fontWeight: 'normal',
    shadowColor: 'rgba(19, 16, 34, 0.15)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 18,
    elevation: 18,
  },
  // popularLocationsLocationContentAViewDetailsbtnHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   color: '#fff',
  // },
  browseBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 28,
    borderRadius: 6,
    marginTop: 25,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    display: 'flex', // 'inline-block'
  },
  // browseBtnHover: { // Gestion d'état
  //   borderColor: '#c10037',
  //   backgroundColor: '#fff',
  //   color: '#c10037',
  // },
  latestadSection: {
    paddingTop: 100,
    paddingBottom: 75,
    paddingHorizontal: 0,
    backgroundColor: '#f9fafc',
  },
  ctaSection: {
    paddingVertical: 100,
    paddingHorizontal: 0,
    // backgroundImage: 'url(../../public/assets/img/Whitebg.png)', // Non supporté directement, utilisez <ImageBackground>
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'right center',
  },
  ctaSectionH3: {
    color: '#0d233e',
    fontSize: 36,
    fontWeight: '700',
    margin: 0,
    marginBottom: 25,
  },
  ctaSectionH3Span: {
    color: '#0d233e',
  },
  ctaContentP: {
    marginBottom: 25,
  },
  ctaContentPostadBtn: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 31,
    borderRadius: 8,
  },
  // ctaContentPostadBtnHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  ctaContentABrowseBtn: {
    borderWidth: 1,
    borderColor: '#374b5c',
    color: '#374b5c',
    paddingVertical: 10,
    paddingHorizontal: 32,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 14,
    marginRight: 0,
    borderRadius: 8,
  },
  testimonialsSection: {
    position: 'relative',
  },
  testimonialsSectionRightimg: {
    // backgroundImage: 'url(../../public/assets/img/testi-bg.png)', // Non supporté directement
    minHeight: 600,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
  },
  testimonialsSectionColLg4ColLg8: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  testimonialHeadingH4: {
    fontWeight: '700',
    fontSize: 36,
    color: '#0d233e',
    marginBottom: 0,
  },
  testimonialHeadingImg: {
    marginTop: 30,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  testimonialsSectionOwlCarouselOwlItemTestiImg: {
    borderRadius: 50,
    width: 86,
    height: 86,
    borderWidth: 3,
    borderColor: 'rgba(62, 102, 223, 0.3)',
  },
  testimonialsSectionOwlCarouselOwlItemImg: {
    width: 'auto',
    borderRadius: 50,
  },
  testimonialsSlidersection: {
    marginTop: -430,
    position: 'relative',
  },
  testimonialsSlidersectionOwlNav: {
    position: 'absolute',
    right: 14,
    top: -40,
  },
  testimonialInfo: {
    backgroundColor: '#fff',
    padding: 40,
    margin: 30,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 20,
    borderRadius: 10,
  },
  testiAuthorH6: {
    color: '#0d233e',
    fontSize: 24,
    fontWeight: '800',
    margin: 0,
    marginBottom: 5,
  },
  testiAuthor: {
    margin: 0,
    marginLeft: 20,
    marginBottom: 0,
  },
  testiAuthorP: {
    color: '#666',
  },
  testimonialsliderHeading: {
    alignItems: 'center',
  },
  testimonialsliderContentP: {
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  partnersSection: {
    textAlign: 'center',
    paddingVertical: 100,
    paddingHorizontal: 0,
  },
  partnersSectionPartnersHeading: {
    fontSize: 36,
    color: '#0d233e',
    fontWeight: '700',
    margin: 0,
    marginBottom: 50,
  },
  partnerslistLiA: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 14,
    paddingHorizontal: 20,
    textAlign: 'center',
    display: 'flex',
    height: 79,
    borderRadius: 10,
    alignItems: 'center',
  },
  pricingplanSection: {
    // background: 'url("../../public/assets/img/Rosebg.png")', // Non supporté directement
    paddingVertical: 100,
    paddingHorizontal: 0,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
  },
  pricingplanSectionSectionHeadingP: {
    color: '#666',
  },
  pricingplanSectionH2: {
    justifyContent: 'center',
  },
  pricingplanSectionSectionHeadingH2Span: {
    marginRight: 0,
    marginLeft: 10,
  },
  priceCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 10,
    padding: 20,
    zIndex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  priceLevelH6: {
    color: '#c10037',
    fontWeight: '700',
    margin: 0,
    marginBottom: 20,
  },
  priceHeadH4: {
    fontSize: 28,
    fontWeight: '800',
    margin: 0,
    marginBottom: 20,
    color: '#0d233e',
  },
  priceHeadH4Span: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
  },
  priceBodyPPriceBodyLi: {
    lineHeight: 27,
    color: '#666',
    margin: 0,
    marginBottom: 20,
  },
  priceBodyLi: {
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingLeft: 30,
    margin: 0,
    marginBottom: 15,
  },
  priceLevel: {
    margin: 0,
    marginBottom: 15,
  },
  priceBodyUl: {
    margin: 0,
    marginBottom: 20,
  },
  // priceBodyUlLiBefore: { // Pseudo-éléments non supportés
  //   backgroundImage: 'url(../../public/assets/img/pricingli-bg.svg)',
  // },
  // priceCardHoverBefore: { // Pseudo-éléments non supportés
  //   position: 'absolute',
  //   content: '',
  //   top: 0,
  //   right: 0,
  //   width: '100%',
  //   left: 'auto',
  //   height: 120,
  //   backgroundImage: 'url(../../public/assets/img/pricingcircle.png)',
  //   backgroundRepeat: 'no-repeat',
  //   zIndex: 2,
  //   opacity: 0.4,
  //   backgroundPosition: 'right top',
  // },
  bannerElipse: {
    position: 'absolute',
    bottom: 0,
  },
  viewdetailsBtn: {
    display: 'flex', // 'block'
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#666666',
    color: '#666666',
    fontWeight: '600',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  // viewdetailsBtnHover: { // Gestion d'état
  //   borderColor: '#c10037',
  //   color: '#c10037',
  // },
  // priceCardHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  // },
  // priceCardHoverPriceHeadH4PriceCardHoverPriceLevelH6PriceCardHoverPriceHeadH4Span: { // Gestion d'état
  //   color: '#fff',
  // },
  // priceCardHoverPriceBodyPPriceCardHoverPriceBodyLi: { // Gestion d'état
  //   color: '#fff',
  // },
  // priceCardHoverPriceBodyUlLiBefore: { // Gestion d'état
  //   backgroundImage: 'url(../../public/assets/img/pricinglihover-bg.svg)',
  // },
  // priceCardHoverViewdetailsBtn: { // Gestion d'état
  //   backgroundColor: '#fff',
  //   color: '#c10037',
  //   borderColor: '#c10037',
  // },
  blogSection: {
    paddingVertical: 100,
    paddingHorizontal: 0,
  },
  gridBlogBlogImage: {
    overflow: 'hidden',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  serviceImg: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  blogImageBlogImageAImg: {
    display: 'flex', // 'block'
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
  blogContentEntryMeta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 0,
    marginBottom: 15,
  },
  blogImageImgBlogImgImgVenueImageImgRecommendedWidgetImgBlkImgBlogWidgetImgBlkImg: {
    // transform: [{ translateZ: 0 }], // Non applicable
    width: '100%',
  },
  // blogImageHoverImgServiceImgHoverImgBlogImgHoverImgBlogWidgetImgBlkHoverImgVenueImageHoverImgRecommendedWidgetImgBlkHoverImg: { // Gestion d'état
  //   transform: [{ scale: 1.35 }, { rotate: '15deg' }],
  // },
  // bloglistWidgetBlogImageHoverImg: { // Gestion d'état
  //   transform: [{ scale: 1.35 }, { rotate: '7deg' }],
  // },
  blogSectionGridBlogEntryMetaLi: {
    margin: 0,
  },
  blogSectionBlogContentViewlinkA: {
    fontSize: 16,
    color: '#374b5c',
    fontWeight: 'normal',
  },
  gridBlogEntryMetaLi: {
    marginBottom: 15,
    fontSize: 12,
    color: '#9c9c9c',
  },
  blogGridBlogPostAuthorA: {
    marginBottom: 15,
    fontSize: 12,
    color: '#9c9c9c',
  },

  // blogContentViewlinkAHover: { // Gestion d'état
  //   color: '#374b5c',
  // },
  entryMetaLi: {
    display: 'flex', // 'inline-block'
  },
  gridBlogBlogTitle: {
    lineHeight: 30,
    margin: 0,
    marginBottom: 15,
  },
  gridBlogEntryMetaLiDateIconI: {
    color: '#374b5c',
    marginRight: 5,
    opacity: 0.5,
  },
  gridBlog: {
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 10,
  },
  // gridBlogHover: { // Gestion d'état
  //   shadowColor: 'rgba(19, 16, 34, 0.06)',
  //   shadowOffset: { width: 0, height: 4.4 },
  //   shadowOpacity: 1,
  //   shadowRadius: 12,
  //   elevation: 12,
  // },
  postAuthorA: {
    fontSize: 14,
  },
  blogContent: {
    padding: 20,
  },
  // postAuthorAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  blogCategoryA: {
    backgroundColor: '#dee2e7',
    paddingVertical: 4,
    paddingHorizontal: 11,
    borderRadius: 4,
    fontSize: 12,
    color: '#374b5c',
    marginRight: 13,
    marginLeft: 0,
    marginBottom: 0,
    display: 'flex', // 'inline-block'
    lineHeight: 16, // Normaliser la hauteur de ligne
  },
  // blogCategoryAHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   color: '#fff',
  // },
  gridBlogBlogTitleA: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: '#0d233e',
  },
  blogContentViewlink: {
    margin: 0,
  },
  blogGridpageBlogContentViewlinkABloggridSidebarBlogContentViewlinkA: {
    fontSize: 16,
    color: '#374b5c',
    fontWeight: 'normal',
  },
  bloglistWidgetViewlink: {
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  viewlinkA: {
    fontSize: 16,
    color: '#374b5c',
    display: 'flex',
    alignItems: 'center',
  },
  viewlinkAI: {
    marginLeft: 7,
  },
  // viewlinkAHoverBlogGridpageBlogContentViewlinkAHoverBloggridSidebarBlogContentViewlinkAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  // viewlinkAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  gridBlogPostAuthor: {
    overflow: 'hidden',
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis', // Non supporté directement
  },
  blogContentPostAuthor: {
    display: 'flex',
    alignItems: 'center',
  },
  bloglistingGridBlogPostAuthorABlogGridpageGridBlogPostAuthorA: {
    margin: 0,
  },
  bloglistingGridBlogPostAuthorImgImgBlogGridpageGridBlogPostAuthorImgImg: {
    borderRadius: 50,
  },
  // gridBlogBlogTitleAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  blogContentP: {
    fontSize: 15,
    margin: 0,
    marginBottom: 15,
  },
  bloglistingBlogContentP: {
    lineHeight: 27,
  },
  blogContentBlogDescription: {
    margin: 0,
    marginBottom: 5,
    marginLeft: 0,
    lineHeight: 27,
    height: 88,
    overflow: 'hidden',
    // textOverflow: 'ellipsis', // Non supporté directement
  },
  blogImageImg: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  lateestadsContentServiceWidget: {
    marginBottom: 25,
  },
  // ctaContentABrowseBtnHover: { // Gestion d'état
  //   color: '#c10037',
  //   borderColor: '#c10037',
  // },
  testimonialsSlidersectionOwlDots: {
    display: 'none',
  },
  progressWrapActiveProgress: { // Gérer l'état d'activation
    opacity: 1,
    // visibility: 'visible', // Non supporté, utilisez display
    transform: [{ translateY: 0 }],
  },
  progressWrap: {
    position: 'absolute', // 'fixed'
    right: 12,
    bottom: 25,
    height: 35,
    width: 35,
    // cursor: 'pointer', // Non applicable
    display: 'flex', // 'block'
    borderRadius: 50,
    shadowColor: 'rgb(75, 64, 237)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 99,
    opacity: 0,
    // visibility: 'hidden', // Non supporté
    transform: [{ translateY: 15 }],
  },

  // progressWrapAfter: { // Pseudo-éléments non supportés
  //   position: 'absolute',
  //   content: '\uf062',
  //   fontFamily: 'Font Awesome 6 Free',
  //   fontWeight: '900',
  //   textAlign: 'center',
  //   lineHeight: 35,
  //   fontSize: 17,
  //   color: '#c10037',
  //   left: 0,
  //   top: 0,
  //   height: 35,
  //   width: 35,
  //   // cursor: 'pointer',
  //   display: 'flex', // 'block'
  //   zIndex: 1,
  // },
  featuredSliderGridViewCard: {
    backgroundColor: '#fff',
    padding: 0,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 10,
    marginBottom: 0,
  },
  // featuredSliderGridViewCardHover: { // Gestion d'état
  //   shadowColor: 'rgba(19, 16, 34, 0.05)',
  //   shadowOffset: { width: 0, height: 4.4 },
  //   shadowOpacity: 1,
  //   shadowRadius: 20,
  //   elevation: 20,
  // },
  featuredSliderGridViewLateestadsContentCard: {
    marginBottom: 25,
  },
  // owlCarouselFeaturedSliderGridViewOwlItemBloglistContentImg: { // Sélecteurs trop complexes
  //   width: 'auto',
  //   display: 'flex', // 'inline'
  //   marginRight: 5,
  //   borderRadius: 50,
  // },
  gridViewFeaturedSliderBlogImg: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  gridViewFeaturedSliderBloglistContentBlogfeaturelink: {
    display: 'flex',
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blogLocationDetailsLocationInfoI: {
    marginRight: 5,
    color: '#374b5c',
    opacity: 0.6,
  },
  blogLocationDetailsLocationInfoIFaCalendarDays: {
    opacity: 0.5,
  },
  blogLocationDetailsLocationInfo: {
    display: 'flex',
    alignItems: 'center',
  },

  // 10. Service Details
  descriptionlinksUl: {
    display: 'flex',
  },
  authordetailsH5: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0d233e',
    marginBottom: 15,
  },
  authordetailsRating: {
    display: 'flex',
    alignItems: 'center',
  },
  callnow: {
    textAlign: 'right',
  },
  authordetailsP: {
    marginBottom: 8,
    color: '#374b5c',
  },
  detailsDescription: {
    paddingVertical: 30,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    shadowColor: 'rgb(222, 226, 231)',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.44,
    shadowRadius: 13,
    elevation: 13,
  },
  aboutHeadingsAuthorImgImg: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  authorImg: {
    marginRight: 20,
    marginLeft: 0,
    marginBottom: 0,
    borderRadius: 50,
  },
  ratingI: {
    fontSize: 12,
    marginRight: 3,
  },
  ratingIFilled: {
    color: '#ffa800',
  },
  rateDetailsH2: {
    fontSize: 40,
    color: '#0d233e',
  },
  rateDetailsP: {
    fontSize: 14,
  },
  aboutHeadings: {
    width: '80%',
    display: 'flex',
  },
  rateDetails: {
    width: '20%',
    textAlign: 'right',
  },
  averageRating: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 0,
    color: '#374b5c',
  },
  aboutDetails: {
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e7',
    paddingVertical: 0,
    paddingBottom: 15,
    margin: 0,
    marginBottom: 30,
    display: 'flex',
  },
  descriptionlinksUlLi: {
    marginRight: 25,
    textTransform: 'capitalize',
  },
  descriptionlinksUlLiA: {
    display: 'flex',
    alignItems: 'center',
    color: '#666',
  },
  descriptionlinksUlLiAImg: {
    paddingRight: 10,
  },
  // descriptionlinksUlLiAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  descriptionlinksUlLiAI: {
    color: '#c10037',
    paddingRight: 10,
    fontSize: 20,
  },
  callnowA: {
    backgroundColor: '#c10037',
    color: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 58,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c10037',
  },
  callnowAI: {
    marginRight: 3,
  },
  // callnowAHover: { // Gestion d'état
  //   backgroundColor: '#fff',
  //   color: '#c10037',
  //   borderColor: '#c10037',
  // },
  detailsMainWrapper: {
    backgroundColor: '#f9fafc',
    paddingVertical: 70,
    paddingHorizontal: 0,
  },
  cardDetails: { // Renommé pour éviter le conflit avec .card général
    backgroundColor: '#fff',
    padding: 25,
    shadowColor: 'rgba(222, 226, 231, 0.44)',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 13,
    elevation: 13,
    margin: 0,
    marginBottom: 25,
    borderWidth: 0,
  },
  cardHeaderH4: {
    fontSize: 20,
    margin: 0,
    marginLeft: 12,
    marginBottom: 0,
  },
  cardBarIcon: {
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  cardBarIconSpan: {
    marginBottom: 5,
  },
  detailsMainWrapperCardHeader: {
    paddingVertical: 0,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e7',
    margin: 0,
    marginBottom: 25,
    display: 'flex',
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  cardHeaderI: {
    color: '#c10037',
    fontSize: 28,
  },
  detailsMainWrapperCardHeaderI: {
    fontSize: 24,
  },
  detailsMainWrapperCardBody: {
    padding: 0,
  },
  barIconSpanNthChild2Details: { // Dupliqué avec barIconSpanNthChild2
    width: 20,
  },
  barIconSpanNthChild3Details: { // Dupliqué avec barIconSpanNthChild3
    width: 16,
  },
  cardP: {
    lineHeight: 25,
  },
  featureImg: {
    backgroundColor: '#f1f1f1',
    padding: 11,
    borderRadius: 50,
    marginRight: 15,
    marginLeft: 0,
    marginBottom: 0,
  },
  accessFeature: {
    marginBottom: 0,
  },
  featuesInfoH6: {
    color: '#666',
    marginBottom: 0,
    fontWeight: '400',
    lineHeight: 1.4 * 16, // 1.4
  },
  lisitingFeatues: {
    flexWrap: 'wrap',
    display: 'flex',
  },
  featureImgImg: {
    width: 28,
    height: 28,
  },
  featureslist: {
    margin: 0,
    marginBottom: 20,
  },
  accessFeatureFeatureslist: {
    margin: 0,
  },
  galleryWidget: {
    position: 'relative',
  },
  gallerySectionGalleryWidget: {
    margin: 0,
    marginBottom: 25,
  },
  gallerySectionGalleryWidgetAImg: {
    borderRadius: 10,
  },
  // gallerySectionGalleryWidgetAHoverBefore: { // Pseudo-éléments non supportés
  //   backgroundColor: '#374b5c',
  //   opacity: 0.9,
  //   display: 'flex', // 'block'
  // },
  galleryContent: {
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardGallerySection: {
    paddingBottom: 5,
  },
  // galleryContentGalleryWidgetABeforeAfter: { // Pseudo-éléments non supportés
  //   display: 'none',
  // },
  // gallerySectionGalleryWidgetAHoverAfter: { // Pseudo-éléments non supportés
  //   display: 'flex', // 'block'
  // },
  // gallerySectionGalleryWidgetAHoverBeforeGallerySectionGalleryWidgetAHoverAfter: { // Pseudo-éléments non supportés
  //   content: ' ',
  //   backgroundColor: '#374b5c',
  //   opacity: 0.9,
  //   position: 'absolute',
  //   top: 0,
  //   color: '#fff',
  //   borderRadius: 10,
  //   width: '100%',
  //   height: '100%',
  // },
  // gallerySectionGalleryWidgetAHoverAfter: { // Pseudo-éléments non supportés
  //   content: '',
  //   position: 'absolute',
  //   background: 'url("../../public/assets/img/eye-icon.png")',
  //   top: '45%',
  //   left: '45%',
  //   color: '#fff',
  //   width: 25,
  //   height: 25,
  // },
  ratingsInfo: {
    backgroundColor: '#f9fafc',
    padding: 20,
    textAlign: 'center',
  },
  galleryContentGalleryWidgetOverlay: {
    display: 'none',
  },
  // galleryContentGalleryWidgetHoverOverlay: { // Gestion d'état
  //   display: 'flex', // 'block'
  //   // cursor: 'pointer', // Non applicable
  // },
  overlayI: {
    position: 'absolute',
    top: '50%',
    left: '45%',
    fontWeight: 'normal',
    color: '#fff',
  },
  ratingsScoreSpan: {
    fontSize: 40,
  },
  cardRatingsInfoPRatingsScore: {
    fontWeight: '800',
    fontSize: 24,
    color: '#374b5c',
  },
  cardRatingsInfoP: {
    margin: 0,
    marginBottom: 25,
    fontSize: 16,
  },
  cardReviewDetailsP: {
    marginBottom: 0,
  },
  cardRatingsInfoPLastChild: {
    margin: 0,
  },
  reviewDetailsH6: {
    fontSize: 20,
    marginBottom: 30,
    color: '#374b5c',
  },
  feedbackboxReviewDetailsH6: {
    fontSize: 20,
    color: '#0d233e',
  },
  reviewDetails: {
    marginLeft: 18,
  },
  reviewDetailsRating: {
    display: 'flex', // 'inline-flex'
  },
  reviewDetailsRatingDiv: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  reviewDetailsRatingDivFlex: { // Combiné avec reviewDetailsRatingDiv
    marginRight: 30,
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
  },
  reviewDetailsRatingFaCalendarDays: {
    color: '#c10037',
    fontSize: 18,
    marginRight: 10,
    marginLeft: 0,
    marginBottom: 0,
  },
  feedbackboxFormControlFeedbackboxTextarea: {
    color: '#374b5c',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e3e3e3',
  },
  feedbackboxTextareaFormControl: {
    backgroundColor: '#f9fafc',
    color: '#374b5c',
    fontSize: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  // feedbackboxFormGroupTextareaPlaceholderFeedbackboxFormGroupInputPlaceholder: { // Non applicable
  //   color: '#374b5c',
  // },
  // feedbackboxFormGroupTextareaFocusFeedbackboxFormGroupInputFocus: { // Gestion d'état
  //   borderColor: '#374b5c',
  // },
  reviewDetailsRatingNotFilled: {
    color: '#ffa800',
  },
  ratingsInfoI: {
    color: '#ffa800',
    fontSize: 12,
  },
  starRatingsI: {
    fontSize: 12,
  },
  blogdetailContentFeedbackboxFormGroup: {
    marginBottom: 20,
  },
  blogdetailContentFeedbackboxReviewboxRatingP: {
    fontSize: 16,
  },
  blogdetailContentFeedbackboxTextareaFormControl: {
    minHeight: 198,
  },
  starRatingsIFilled: {
    color: '#ffa800',
  },
  ratingsContentTable: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    width: '100%',
  },
  ratingsContentTableTd: {
    padding: 10,
    // whiteSpace: 'nowrap',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  ratingsContentTableTdScroreWidth: {
    width: '100%',
  },
  ratingsContentTableTdStarRatingsI: {
    marginRight: 3,
  },
  ratingsContentTableTrNthChildEven: {
    backgroundColor: '#f1f1f1',
  },
  ratingsTableTableResponsive: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  scroreWidthSpan: {
    backgroundColor: '#e6e6e6',
    height: 10,
    width: '100%',
    display: 'flex', // 'inline-block'
    borderRadius: 50,
  },
  // ratingColorFaStarBefore: { // Pseudo-éléments non supportés
  //   color: '#374b5c',
  // },
  // ratingOverallFaStarBefore: { // Pseudo-éléments non supportés
  //   color: '#ffa800',
  // },
  scroreWidthSelectedSpan: {
    backgroundColor: '#ffa800',
  },
  reviewListReviewGalleryLi: {
    width: 150,
    height: 160,
    marginRight: 10,
    marginLeft: 0,
    marginBottom: 0,
    padding: 0,
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
  reviewImg: {
    width: 82,
    height: 82,
    borderRadius: 50,
  },
  reviewSecReviewBoxReviewDetailsH6: {
    marginBottom: 15,
  },
  reviewImgImg: {
    borderRadius: 50,
  },
  reviewDetailsReplyBox: {
    borderWidth: 1,
    borderColor: '#dee2e7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: 25,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewDetailsReplyBoxP: {
    margin: 0,
  },
  thumbsupI: {
    color: '#22c55e',
    marginRight: 3,
  },
  // replyBoxThumbsupHover: { // Gestion d'état
  //   color: '#22c55e',
  // },
  thumbsdownI: {
    color: '#ff0000',
    marginRight: 3,
  },
  // replyBoxThumbsdownHover: { // Gestion d'état
  //   color: '#ff0000',
  // },
  reviewDetailsReplyBoxPA: {
    marginRight: 0,
    marginLeft: 22,
  },
  // replyBoxAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  reviewListLi: {
    backgroundColor: '#f9fafc',
    padding: 25,
    borderRadius: 10,
    margin: 0,
    marginBottom: 25,
  },
  replyBoxAReplylinkI: {
    marginRight: 5,
    marginLeft: 0,
    marginBottom: 0,
  },
  reviewListLiNthChild2: {
    marginLeft: 60,
  },
  reviewListReviewGalleryLiNthChild2: {
    marginLeft: 0,
  },
  reviewboxRating: {
    marginTop: 20,
    marginBottom: 20,
  },
  btnPrimaryDetails: { // Dupliqué avec btnPrimary
    paddingVertical: 10,
    paddingHorizontal: 34,
    borderRadius: 8,
  },
  reviewboxRatingPI: {
    color: '#ff823b',
    fontSize: 12,
  },
  namefieldFormGroup: {
    width: '50%',
    marginRight: 20,
  },
  feedbackboxNamefield: {
    display: 'flex',
  },
  feedbackboxReviewDetails: {
    marginLeft: 0,
  },
  reviewboxRatingPSpan: {
    marginRight: 15,
    marginLeft: 0,
    marginBottom: 0,
  },
  listingsSidebarCardRightsidebarCard: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    marginBottom: 25,
  },
  listContentBlogPagination: {
    marginBottom: 25,
  },
  listContentListingmappageContentBlogPaginationListContentListingmaplistContentBlogPagination: {
    marginBottom: 0,
  },
  listingsSidebarCardH4RightsidebarCardH4: {
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e7',
    paddingBottom: 20,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: 20,
    color: '#0d233e',
    margin: 0,
    marginBottom: 25,
    display: 'flex',
    alignItems: 'center',
  },
  rightsidebarCardH4IListingsSidebarCardH4I: {
    color: '#c10037',
    marginRight: 10,
    marginLeft: 0,
    marginBottom: 0,
  },
  rightsidebarCardH4ImgListingsSidebarCardH4Img: {
    marginRight: 8,
    marginLeft: 0,
    marginBottom: 0,
  },
  cardInfoList: {
    marginTop: 12,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  infoListLi: {
    display: 'flex',
    alignItems: 'center',
  },
  infoListLiImg: {
    marginRight: 10,
    color: '#c10037',
  },
  infoListLiI: {
    color: '#c10037',
    marginRight: 10,
    fontSize: 20,
  },
  rightsidebarCardSocialiconsI: {
    margin: 0,
  },
  rightsidebarCardUlLiSocialiconsAI: {
    color: '#666',
  },
  rightsidebarCardUlLiSocialiconsA: {
    borderWidth: 1,
    borderColor: '#666666',
    color: '#666666',
    borderRadius: 50,
    marginRight: 12,
    marginLeft: 0,
    marginBottom: 0,
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideauthorImg: {
    marginRight: 12,
    marginLeft: 0,
    marginBottom: 0,
    borderRadius: 50,
  },
  sideauthorImgImg: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  sideauthorInfoP: {
    fontSize: 12,
  },
  sideauthorInfoPAuthorname: {
    margin: 0,
    marginBottom: 6,
    fontSize: 20,
    fontWeight: '500',
    color: '#09153c',
  },
  showphotos: {
    position: 'absolute',
    right: 35,
    bottom: 35,
  },
  bannergallerySection: {
    position: 'relative',
  },
  showphotosA: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 45,
  },
  // showphotosAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  contactbusinessformSubmitSectionBtnPrimary: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex', // 'block'
    width: '100%',
  },
  contactbusinessformInputContactbusinessformTextareaContactbusinessformInputFocusContactbusinessformTextareaFocus: {
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 8,
    minHeight: 52,
  },
  contactbusinessformTextareaFormControl: {
    backgroundColor: '#fff',
    padding: 15,
  },
  // contactbusinessformFormGroupFormControlWebkitInputPlaceholder: { // Non applicable
  //   color: '#8d8d8d',
  // },
  // contactbusinessformFormGroupFormControlMozPlaceholder: { // Non applicable
  //   color: '#8d8d8d',
  // },
  // contactbusinessformFormGroupFormControlMsInputPlaceholder: { // Non applicable
  //   color: '#8d8d8d',
  // },
  // contactbusinessformFormGroupFormControlMozPlaceholder: { // Non applicable
  //   color: '#8d8d8d',
  // },
  // cardUlLiSocialiconsAHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   borderColor: '#c10037',
  //   color: '#fff',
  // },
  // cardUlLiSocialiconsAHoverI: { // Gestion d'état
  //   color: '#fff',
  // },
  rightsidebarCardStatisticsListIcons: {
    color: '#c10037',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 50,
    width: 35,
    height: 35,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  rightsidebarCardStatisticsListLi: {
    backgroundColor: '#f9fafc',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    marginBottom: 24,
    borderRadius: 10,
  },
  rightsidebarCardUlInfoListLi: {
    justifyContent: 'flex-start', // 'normal'
  },
  mapFrame: {
    width: '100%',
    overflow: 'hidden',
  },
  mapFrameIframe: {
    width: '100%',
  },
  rightsidebarCardUlLi: {
    paddingBottom: 18,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightsidebarCardUlLiSpan: {
    color: '#0d233e',
  },
  sortingDivSortbyset: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 11,
    marginLeft: 0,
    marginBottom: 0,
  },
  gridListviewUl: {
    display: 'flex',
  },
  gridListviewUlLi: {
    marginRight: 10,
    marginLeft: 0,
    marginBottom: 0,
  },
  gridListviewUlLiLastChild: {
    marginRight: 0,
  },
  statisticsListLiStatisticDetails: {
    alignItems: 'center',
    display: 'flex',
  },
  reviewBox: {
    display: 'flex',
  },
  reviewBoxFeedbackbox: {
    display: 'flex', // 'block'
  },
  reviewBoxFeedbackboxFormGroup: {
    marginBottom: 20,
  },
  // reviewBoxFeedbackboxInputReviewBoxFeedbackboxTextareaFocus: { // Gestion d'état
  //   backgroundColor: '#f9fafc',
  // },
  reviewGallery: {
    display: 'flex',
    marginTop: 25,
  },
  reviewGalleryImg: {
    borderRadius: 10,
  },
  sidebarauthorDetails: {
    display: 'flex',
  },

  // 11. Listing List
  breadcrumbList: { // Renommé pour éviter le conflit
    justifyContent: 'center',
    margin: 0,
  },
  // breadcrumbLiAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  breadcrumbTitleList: { // Renommé
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
  },
  breadcrumbBar: {
    backgroundColor: '#384b5c',
    paddingTop: 170,
    paddingBottom: 90,
    paddingHorizontal: 0,
    position: 'relative',
    zIndex: 1,
    width: '100%',
  },
  // breadcrumbBarBefore: { // Pseudo-éléments non supportés
  //   content: '',
  //   background: 'url("../../public/assets/img/breadcrumbleft-bg.png") no-repeat',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: 175,
  //   height: 149,
  //   backgroundSize: 'cover',
  // },
  // breadcrumbBarAfter: { // Pseudo-éléments non supportés
  //   content: '',
  //   background: 'url("../../public/assets/img/breadcrumbright-bg.png") no-repeat',
  //   position: 'absolute',
  //   right: 0,
  //   width: 175,
  //   height: 149,
  //   backgroundSize: 'cover',
  //   bottom: 0,
  // },
  breadcrumbBg: {
    position: 'absolute',
    width: '100%',
    top: 0,
    height: '100%',
  },
  breadcrumbBgImg: {
    height: 234,
    opacity: 0.1,
  },
  breadcrumbLiABreadcrumbItemActive: {
    color: '#fff',
  },
  breadcrumbItemActiveBreadcrumbItemPlusBreadcrumbItemBefore: {
    color: '#fff',
  },
  listingsSidebar: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'rgba(19, 16, 34, 0.06)',
    shadowOffset: { width: 0, height: 4.4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
  },
  listContent: {
    backgroundColor: '#f9fafc',
    paddingTop: 70,
    paddingBottom: 45,
    paddingHorizontal: 0,
  },
  // slidecontainerIrsFlatIrsBar: { // Sélecteurs trop complexes, non applicables
  //   top: 25,
  //   backgroundColor: '#c10037',
  // },
  // slidecontainerIrsFlatIrsLineSlidecontainerIrsFlatIrsBar: { // Sélecteurs trop complexes
  //   height: 13,
  // },
  // slidecontainerIrsWithGridIrsGridSlidecontainerIrsFlatIrsMinSlidecontainerIrsFlatIrsMax: { // Sélecteurs trop complexes
  //   display: 'none',
  // },
  // slidecontainerIrsFlatIrsHandleIFirstChild: { // Sélecteurs trop complexes
  //   position: 'absolute',
  //   display: 'flex', // 'block'
  //   top: -4,
  //   left: -3,
  //   width: 25,
  //   height: 25,
  //   marginLeft: -1,
  //   backgroundColor: '#c10037',
  //   borderRadius: 50,
  //   borderWidth: 3,
  //   borderColor: '#fff',
  //   // cursor: 'pointer',
  // },
  // slidecontainerIrsFlatIrsFromIrsFlatIrsToIrsFlatIrsSingle: { // Sélecteurs trop complexes
  //   color: 'white',
  //   fontSize: 12,
  //   lineHeight: 1.333 * 16,
  //   // textShadow: 'none',
  //   paddingVertical: 4,
  //   paddingHorizontal: 10,
  //   backgroundColor: '#c10037',
  //   borderRadius: 2,
  //   top: -10,
  // },
  slidecontainerListingsSidebarCard: {
    padding: 0,
    margin: 0,
    marginBottom: 8,
    borderWidth: 0,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  filterContent: {
    marginBottom: 20,
    color: '#8d8d8d',
  },
  listingsSidebarFilterContentAmenitiesListingsSidebarFilterContentRegion: {
    marginBottom: 30,
  },
  listingsSidebarFilterContentRadius: {
    marginBottom: 15,
  },
  filterContentFormControlFilterContentFormControlInput: {
    color: '#374b5c',
  },
  // filterContentSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionRendered: { // Sélecteurs trop complexes
  //   lineHeight: 52,
  //   color: '#374b5c',
  //   paddingVertical: 0,
  //   paddingHorizontal: 15,
  // },
  filterContentLookingInputInput: {
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 8,
    color: '#374b5c',
    minHeight: 52,
  },
  // filterContentFormGroupInputPlaceholderFilterContentFormGroupInputPlaceholderInputPlaceholder: { // Non applicable
  //   color: '#8d8d8d',
  // },
  filterContentGroupImgI: {
    color: '#8d8d8d',
    top: 18,
  },
  // filterContentSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionArrowB: { // Sélecteurs trop complexes
  //   borderColor: '#8d8d8d',
  // },
  descriptionlinksUlLiLastChild: {
    marginRight: 0,
  },
  // sortbysetSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionRendered: { // Sélecteurs trop complexes
  //   color: '#0d233e',
  //   lineHeight: 50,
  //   fontSize: 15,
  //   paddingLeft: 10,
  // },
  // sortbysetSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionArrowB: { // Sélecteurs trop complexes
  //   borderColor: '#8d8d8d',
  // },
  // sortbysetSelect2ResultsOptionSelected: { // Sélecteurs trop complexes
  //   fontSize: 14,
  // },
  groupImg: {
    position: 'relative',
  },
  slidecontainerInput: {
    width: '100%',
    marginTop: 40,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  groupImgInput: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    paddingLeft: 35,
  },
  sliderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374b5c',
  },
  sliderInfoDemo: {
    color: '#666d7a',
  },
  groupImgI: {
    position: 'absolute',
    top: 16,
    left: 14,
    color: '#374b5c',
  },
  filterContentCustomCheck: {
    color: '#9c9c9c',
    display: 'flex', // 'inline-block'
    position: 'relative',
    fontSize: 14,
    paddingLeft: 30,
    // cursor: 'pointer',
    // userSelect: 'none', // Non applicable
    top: -6,
    margin: 0,
  },
  filterContentAmenitiesLi: {
    marginBottom: 10,
  },
  filterContentCustomCheckCheckmark: {
    position: 'absolute',
    top: 3,
    left: 0,
    height: 18,
    width: 18,
    borderWidth: 1,
    borderColor: '#b7b7b7',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  filterContentCustomCheckInputCheckedCheckmark: {
    backgroundColor: '#c10037',
    borderColor: '#c10037',
  },
  filterContentCustomCheckInput: {
    position: 'absolute',
    opacity: 0,
    // cursor: 'pointer',
  },
  filterContentCustomCheckInputCheckedCheckmarkAfter: {
    display: 'flex', // 'block'
  },
  // filterContentCustomCheckCheckmarkAfter: { // Pseudo-éléments non supportés
  //   content: '\uf00c',
  //   fontFamily: 'Font Awesome 5 Free',
  //   fontWeight: '900',
  //   position: 'absolute',
  //   display: 'none',
  //   left: 4,
  //   top: 0,
  //   color: '#fff',
  //   fontSize: 11,
  // },
  cardFilterContentAmenitiesH4: {
    borderBottomWidth: 0,
    paddingVertical: 0,
    paddingBottom: 5,
    margin: 0,
    marginBottom: 20,
  },
  cardFilterContentSliderInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    marginBottom: 20,
  },
  cardFilterContentSliderInfoH4: {
    margin: 0,
  },
  cardAmenitiesFormGroup: {
    display: 'flex',
  },
  cardAmenitiesFormGroupInput: {
    marginRight: 10,
    marginLeft: 0,
    marginBottom: 0,
  },
  formGroupInputPlaceholder: {
    color: '#b7b7b7',
  },
  cardAmenitiesFormGroupInputLastChild: {
    marginRight: 0,
  },
  amenitiesSearchBtn: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  amenitiesSearchBtnBtn: {
    margin: 0,
    marginBottom: 20,
  },
  amenitiesSearchBtnBtnReset: {
    color: '#374b5c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  amenitiesSearchBtnBtnResetI: {
    marginRight: 7,
  },
  // amenitiesSearchBtnBtnResetHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   color: '#fff',
  // },
  // sortbysetSelect2ContainerDefaultSelect2SelectionSingle: { // Sélecteurs trop complexes
  //   backgroundColor: '#fff',
  //   borderWidth: 1,
  //   borderColor: '#f1f1f1',
  //   borderRadius: 5,
  //   height: 50,
  //   fontSize: 14,
  // },
  // sortbysetSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionArrow: { // Sélecteurs trop complexes
  //   height: 47,
  //   right: 6,
  // },
  // sortbysetSelect2ContainerDefaultSelect2SelectionSingleSelect2SelectionArrowB: { // Sélecteurs trop complexes
  //   position: 'absolute',
  //   top: '55%',
  //   left: '50%',
  //   borderColor: '#3c4758',
  //   borderStyle: 'solid',
  //   borderWidth: 0,
  //   borderRightWidth: 2,
  //   borderBottomWidth: 2,
  //   padding: 3,
  //   height: 0,
  //   marginLeft: -10,
  //   marginTop: -3,
  //   width: 0,
  //   transform: [{ rotate: '45deg' }, { translateY: '-50%' }],
  // },
  sortbysetSortingSelect: {
    minWidth: 160,
    marginLeft: 10,
  },
  gridListviewAActiveGridListviewAHover: {
    backgroundColor: '#c10037',
    borderColor: '#c10037',
    color: '#fff',
  },
  gridListviewA: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#edf1f1',
    color: 'rgba(104, 97, 109, 0.5)',
    borderRadius: 5,
  },
  sortingDiv: {
    color: '#666',
    margin: 0,
    marginBottom: 25,
  },
  countSearchSpan: {
    color: '#c10037',
  },
  blogListviewCard: {
    padding: 0,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  blogListviewCardBody: {
    padding: 25,
  },
  blogListviewBlogImg: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  listContentBlogListviewBlogImg: {
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  blogListviewCardBlogWidget: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  blogListviewCardFavItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 15,
    width: '100%',
  },
  favItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // cursor: 'pointer',
  },
  bloglistContentBlogfeaturelink: {
    display: 'flex',
    alignItems: 'center',
  },
  listgridSidebarBlogfeaturelinkListmapGridBlogfeaturelink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listmaplistContentBlogfeaturelink: {
    justifyContent: 'flex-start', // 'normal'
  },
  bloglistContentBlogFeatures: {
    marginRight: 15,
    marginLeft: 0,
    marginBottom: 0,
  },
  bloglistContentBlogAuthor: {
    display: 'flex',
    alignItems: 'center',
  },
  bloglistContentBlogAuthorBlogAuthorImg: {
    borderRadius: 50,
    width: 25,
    height: 25,
    marginRight: 8,
    marginLeft: 0,
    marginBottom: 0,
  },
  bloglistContentBlogAuthorImgImg: {
    marginRight: 5,
    marginLeft: 0,
    marginBottom: 0,
    borderRadius: 50,
    width: 25,
    height: 25,
  },
  bloglistContentBlogfeaturelinkIBloglistContentBlogfeaturelinkImg: {
    marginRight: 5,
    marginLeft: 0,
    marginBottom: 0,
  },
  blogLocationDetails: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    justifyContent: 'space-between',
    margin: 0,
    marginBottom: 15,
  },
  blogListviewFeaturedText: {
    fontSize: 14,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  blogfeaturelinkA: {
    color: '#9c9c9c',
    fontSize: 12,
  },
  // blogfeaturelinkAHoverBlogfeaturelinkAHoverI: { // Gestion d'état
  //   color: '#c10037',
  // },
  blogListviewH6: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 0,
    marginRight: 0,
    // whiteSpace: 'nowrap',
    width: 395,
    // textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  // blogListviewH6AHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  blogListviewCardRatingsSpan: {
    backgroundColor: '#ff823b',
    color: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginRight: 6,
    marginLeft: 0,
    marginBottom: 0,
    borderRadius: 5,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ff823b',
  },
  blogListviewCardP: {
    fontSize: 12,
    lineHeight: 25,
    color: '#9c9c9c',
    marginBottom: 15,
  },
  blogListviewCardAmount: {
    fontSize: 12,
    color: '#9c9c9c',
  },
  blogListviewCardAmountDetails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blogListviewCardAmountSpan: {
    textDecorationLine: 'line-through',
  },
  blogListviewCardAmountDetailsA: {
    color: '#0d233e',
  },
  // blogListviewCardAmountDetailsAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  blogListviewCardAmountDetailsValidrate: {
    color: '#c10037',
    fontSize: 20,
    fontWeight: '600',
    textDecorationLine: 'none',
  },
  blogPaginationPagination: {
    marginTop: 0,
  },
  bloglistingBlogPaginationPaginationBloggridSidebarBlogPaginationPagination: {
    marginBottom: 25,
  },
  paginationCenter: {
    justifyContent: 'center',
    display: 'flex',
    width: '79%',
  },
  pagelinkUl: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 0,
    marginBottom: 0,
  },
  pagelinkUlLiA: {
    borderWidth: 1,
    borderColor: '#dee2e7',
    backgroundColor: '#fff',
    borderRadius: 10,
    color: '#0d233e',
    paddingVertical: 10,
    paddingHorizontal: 19,
    marginRight: 12,
    marginLeft: 0,
    marginBottom: 0,
    width: 46,
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // pagelinkUlLiAHover: { // Gestion d'état
  //   backgroundColor: '#374b5c',
  //   borderColor: '#374b5c',
  //   color: '#fff',
  // },
  pagelinkPageItemFirstChildPageLink: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  pagelinkPageItemLastChildPageLink: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  pagelinkActivePageLink: {
    backgroundColor: '#374b5c',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#374b5c',
  },
  // pageLinkFocus: { // Non applicable
  //   shadowColor: 'transparent',
  //   shadowOffset: { width: 0, height: 0 },
  //   shadowOpacity: 0,
  //   shadowRadius: 0,
  //   elevation: 0,
  // },
  // previtemAHoverNextlinkAHoverPrevitemAFocusNextlinkAFocus: { // Gestion d'état
  //   backgroundColor: '#fff',
  //   color: '#374b5c',
  //   shadowColor: 'transparent',
  //   shadowOffset: { width: 0, height: 0 },
  //   shadowOpacity: 0,
  //   shadowRadius: 0,
  //   elevation: 0,
  // },
  previtemA: {
    color: '#374b5c',
    minWidth: 150,
    paddingVertical: 10,
    paddingHorizontal: 38,
  },
  nextlinkA: { // Dupliqué avec previtemA
    color: '#374b5c',
    minWidth: 150,
    paddingVertical: 10,
    paddingHorizontal: 38,
  },
  // previtemAHoverNextlinkAHover: { // Gestion d'état
  //   backgroundColor: '#374b5c',
  //   borderColor: '#374b5c',
  //   color: '#fff',
  // },
  // previtemAHoverINextlinkAHoverI: { // Gestion d'état
  //   color: '#fff',
  // },
  pageItemFirstChildPageLinkPageItemLastChildPageLink: {
    borderRadius: 10,
  },
  previtemAI: {
    color: '#c10037',
  },
  nextlinkAI: { // Dupliqué
    color: '#c10037',
  },
  previtemAIOnly: { // Renommé pour éviter le conflit
    marginRight: 5,
  },
  nextlinkAIOnly: { // Renommé
    marginLeft: 5,
  },
  sortingDivColLg8: {
    justifyContent: 'flex-end',
    display: 'flex',
    paddingRight: 0,
  },
  mapSection: {
    position: 'relative',
  },
  showfilter: {
    position: 'absolute',
    top: 20,
    right: 30,
    width: '50%',
    textAlign: 'right',
  },
  filterbtnFilterbtnHoverFilterbtnFocus: {
    backgroundColor: '#fff',
    paddingVertical: 11,
    paddingHorizontal: 48,
    borderRadius: 10,
    color: '#374b5c',
    fontWeight: '600',
    minWidth: 215,
    borderWidth: 0,
    margin: 0,
    marginBottom: 20,
  },
  filterbtnI: {
    color: '#c10037',
  },
  hidefilterBtn: {
    opacity: 0,
    // visibility: 'hidden',
    display: 'none',
  },
  filterOpenShowfilterBtn: {
    opacity: 0,
    // visibility: 'hidden',
    display: 'none',
  },
  filterOpenHidefilterBtnShowfilterFilterOpenListingsSidebar: {
    opacity: 1,
    // visibility: 'visible',
    display: 'flex', // 'block'
    width: 'auto',
  },
  showfilterListingsSidebar: {
    textAlign: 'left',
    maxHeight: 400,
    // overflow: 'scroll', // 'auto'
    borderRadius: 0,
  },
  showfilterListingsSidebarCard: {
    borderRadius: 0,
    margin: 0,
  },

  // 12. Listings Grid
  listContentGridViewCard: {
    backgroundColor: '#fff',
    padding: 0,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 10,
    marginBottom: 25,
  },
  // listContentGridViewCardHover: { // Gestion d'état
  //   shadowColor: 'rgb(19, 16, 34)',
  //   shadowOffset: { width: 0, height: 4.4 },
  //   shadowOpacity: 0.05,
  //   shadowRadius: 20,
  //   elevation: 20,
  // },
  gridViewBlogImg: {
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    zIndex: 1,
  },
  listmapgridContentGridViewBlogImgListmapgridContentGridViewBlogImgImg: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  listmaplistContentBlogListviewBlogImgListmaplistContentBlogListviewBlogImgImg: {
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  gridViewCardBody: {
    position: 'relative',
    padding: 25,
  },
  gridViewGridAuthor: {
    position: 'absolute',
    top: -18,
    zIndex: 2,
    borderRadius: 50,
  },
  gridViewGridAuthorImg: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  gridViewBloglistContentBlogfeaturelink: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 0,
    marginRight: 0,
  },
  gridViewBloglistContentBlogAuthorSpan: {
    fontSize: 12,
  },
  gridViewCardAmountDetailsValidrate: {
    color: '#c10037',
    fontSize: 20,
    fontWeight: '600',
    textDecorationLine: 'none',
  },
  amountDetails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  gridViewCardAmount: {
    fontSize: 12,
    color: '#9c9c9c',
  },
  gridViewCardAmountSpan: {
    textDecorationLine: 'line-through',
  },
  gridViewCardH6: {
    margin: 0,
    marginBottom: 15,
    width: '100%',
    color: '#0d233e',
    fontSize: 18,
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  gridViewCardH6A: {
    color: '#0d233e',
  },
  // gridViewCardH6AHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  gridViewFeaturedText: {
    backgroundColor: '#4c82f7',
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  gridViewBlogPaginationPagination: {
    margin: 0,
  },
  gridViewBlogAuthorSpanGridViewBlogLocationDetailsGridViewRatings: {
    color: '#9c9c9c',
    fontSize: 12,
  },
  gridViewCardRatingsSpan: {
    backgroundColor: '#ff823b',
    color: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 9,
    marginRight: 6,
    marginLeft: 0,
    marginBottom: 0,
    borderRadius: 4,
    fontSize: 14,
  },

  // 13. Listingmap Grid
  listContentListmapGrid: {
    padding: 0,
  },
  listContentListmapGridCountSearchPListmapGridSortingDivSortbyset: {
    fontSize: 16,
    color: '#0d233e',
  },
  listmaplistContentBlogListviewH6: {
    width: '100%',
  },
  proContentH3A: {
    color: '#fff',
    fontSize: 16,
    margin: 0,
    marginBottom: 15,
  },
  proContent: {
    position: 'absolute',
    left: 15,
    top: 25,
  },
  mapListingProfileWidget: {
    position: 'relative',
    zIndex: 1,
  },
  // mapListingProfileWidgetAfter: { // Pseudo-éléments non supportés
  //   content: '',
  //   backgroundColor: 'rgba(0, 0, 0, 0.53)',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   zIndex: -1,
  //   borderRadius: 10,
  // },
  proContentH3: {
    fontWeight: 'normal',
    lineHeight: 20,
    alignItems: 'center',
    display: 'flex',
    height: 20,
    margin: 0,
    marginBottom: 5,
  },
  availableInfoLi: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  availableInfoLiMapaddress: {
    margin: 0,
    marginBottom: 65,
    fontSize: 14,
  },
  availableInfoMapAmount: {
    fontSize: 20,
  },
  availableInfoMapAmountSpan: {
    fontSize: 14,
    color: '#fff',
  },
  availableInfoLiMapaddressI: {
    color: '#c10037',
    fontSize: 25,
  },

  // 14. Categories
  categoriesContentA: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 10,
    padding: 30,
    textAlign: 'center',
    display: 'flex', // 'block'
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 2,
  },
  // categoriesContentAHover: { // Gestion d'état
  //   backgroundColor: '#374b5c',
  //   color: '#fff',
  // },
  // categoriesContentAHoverH6Span: { // Gestion d'état
  //   color: '#fff',
  // },
  // categoriesContentAHoverBefore: { // Pseudo-éléments non supportés
  //   opacity: 0,
  // },
  // categoriesContentABefore: { // Pseudo-éléments non supportés
  //   backgroundImage: 'url(../../public/assets/img/categoriesbg.png)',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'left bottom',
  //   content: '',
  //   width: '100%',
  //   height: '100%',
  //   position: 'absolute',
  //   left: 0,
  //   zIndex: -1,
  //   opacity: 1,
  // },
  categoriesContent: {
    marginBottom: 25,
  },
  categorieslistSection: {
    paddingTop: 70,
    paddingBottom: 45,
    paddingHorizontal: 0,
    backgroundColor: '#f9fafc',
  },
  categorieslastsecCategoriesContent: {
    marginBottom: 0,
  },
  categorieslistSectionH6: {
    fontWeight: '700',
    color: '#0d233e',
    margin: 0,
    marginBottom: 15,
    marginTop: 20,
    lineHeight: 20,
  },
  categorieslistSectionSpanAds: {
    margin: 0,
    marginBottom: 10,
  },
  categorieslistSectionSpan: {
    display: 'flex', // 'block'
    color: '#666',
    fontSize: 14,
  },

  // 15. Blog Grid
  breadcrumbBarBlogpagebreadscrumbBloglistSection: {
    backgroundColor: '#f9fafc',
  },
  // breadcrumbBarBlogpagebreadscrumbAfterBefore: { // Pseudo-elements non supportés
  //   display: 'none',
  // },
  bloglistSection: {
    paddingTop: 70,
    paddingBottom: 45,
    paddingHorizontal: 0,
  },
  breadcrumbpagebreadscrumbBreadcrumbLiABreadcrumbItemActiveBreadcrumbItemPlusBreadcrumbItemBefore: {
    color: '#374b5c',
  },
  blogpagebreadscrumbBreadcrumbTitle: {
    color: '#0d233e',
  },
  // bloglistSectionPostAuthorAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  bloglistSectionGridBlog: {
    backgroundColor: '#fff',
    marginBottom: 25,
  },
  bloglistSectionPostAuthorABloglistSectionGridBlogEntryMetaLi: {
    fontSize: 12,
    color: '#9c9c9c',
  },
  bloglistSectionBlogContent: {
    paddingVertical: 0,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bloglistSectionBloggridSidebarBlogContent: {
    padding: 20,
  },
  bloglistSectionBloggridSidebarGridBlogEntryMetaLi: {
    margin: 0,
  },
  blogGridpageBlogContent: {
    padding: 20,
  },
  blogGridpageGridBlogEntryMetaLi: {
    margin: 0,
  },
  bloglistSectionGridBlogEntryMetaLiDateIconI: {
    color: '#374b5c',
    marginRight: 5,
    marginLeft: 0,
    marginBottom: 0,
    opacity: 0.5,
  },
  bloglistSectionPostAuthorImg: {
    marginRight: 5,
    marginLeft: 0,
    marginBottom: 0,
  },
  blogcategoriesList: {
    paddingLeft: 17,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#666',
  },
  // blogcategoriesListLiAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  rightsidebarCardUlBlogcategoriesListLi: {
    // listStyle: 'disc', // Non supporté directement, utilisez un caractère unicode
    display: 'flex', // 'list-item'
  },
  bloglistingBlogContentViewlink: {
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  bloglistingGridBlogEntryMetaLi: {
    margin: 0,
  },
  rightsidebarCardUlBlogcategoriesListLiLastChild: {
    padding: 0,
  },

  mapRight: {
    bottom: 0,
    height: '100%',
    minHeight: '100%',
    paddingRight: 30,
    position: 'absolute', // 'fixed'
    right: 0,
    top: 115,
    zIndex: 1029,
  },

  rightsidebarCardUlTagsLi: {
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
    color: '#374b5c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: 'relative',
    marginRight: 10,
    marginLeft: 0,
    marginBottom: 15,
    display: 'flex', // 'inline-block'
    // cursor: 'pointer',
    borderWidth: 1,
    borderColor: '#e3e3e3',
  },
  // rightsidebarCardUlTagsLiHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   borderColor: '#c10037',
  //   color: '#fff',
  // },
  rightsidebarCardTagsWidget: {
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 25,
  },
  rightsidebarCardArticle: {
    position: 'relative',
    borderRadius: 10,
    margin: 0,
    marginBottom: 25,
  },
  rightsidebarCardArticleArticleimg1: {
    // backgroundImage: 'url("../../public/assets/img/blog/article-1.jpg")', // Non supporté
  },
  rightsidebarCardArticleArticleimg2: {
    // backgroundImage: 'url("../../public/assets/img/blog/article-2.jpg")', // Non supporté
  },
  rightsidebarCardArticleArticleimg3: {
    // backgroundImage: 'url("../../public/assets/img/blog/article-3.jpg")', // Non supporté
  },
  rightsidebarCardArticleA: {
    display: 'flex', // 'block'
    paddingVertical: 100,
    paddingHorizontal: 0,
    borderRadius: 10,
    position: 'relative',
    zIndex: 1,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
  },
  // rightsidebarCardArticleAfter: { // Pseudo-éléments non supportés
  //   content: '',
  //   background: 'linear-gradient(0deg, #000000 16.31%, rgba(0, 0, 0, 0) 100%)',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   zIndex: -1,
  //   borderRadius: 10,
  // },
  blogsidebarFilterContent: {
    marginBottom: 0,
  },
  rightsidebarCardArticleUl: {
    position: 'absolute',
    bottom: 20,
    color: '#fff',
    left: 20,
  },
  rightsidebarCardArticleUlLi: {
    paddingBottom: 0,
    display: 'flex', // 'block'
  },
  rightsidebarCardArticleUlH6: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 20,
  },
  rightsidebarCardArticleLastChild: {
    margin: 0,
  },
  rightsidebarCardArticleLiI: {
    color: '#c10037',
    marginRight: 5,
  },
  // rightsidebarCardArticleUlH6Hover: { // Gestion d'état
  //   color: '#c10037',
  // },

  // 16. Blog List
  bloglistingBlogImage: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bloglistingGridBlogEntryMetaLiDateIconI: {
    color: '#666666',
    marginRight: 5,
    opacity: 0.5,
  },
  blogContentPostAuthorBloglistContentPostAuthor: {
    width: 25,
    marginRight: 7,
  },
  gridBlogPostAuthorImgBloglistContentPostAuthorImg: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  bloglistingGridBlog: {
    marginBottom: 25,
    backgroundColor: '#fff',
  },
  bloglisting: {
    backgroundColor: '#f9fafc',
    paddingTop: 70,
    paddingBottom: 45,
    paddingHorizontal: 0,
  },
  bloglistleftWidgetEntryMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    marginBottom: 18,
    alignItems: 'center',
  },

  bloglistleftWidgetBlogListviewH3: {
    fontSize: 20,
    color: '#0d233e',
    marginBottom: 18,
    width: '100%',
    overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
  },
  bloglistleftWidgetBlogListviewH3A: {
    color: '#0d233e',
  },
  // bloglistleftWidgetblogListviewH3A: { // Dupliqué
  //   color: '#0d233e',
  // },
  // bloglistleftWidgetBlogListviewH3AHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  bloglistleftWidgetPostAuthorABloglistleftWidgetBlogListviewDateIcon: {
    fontSize: 12,
    color: '#9c9c9c',
  },
  bloglistleftWidgetBlogListviewDateIconIFaCalendarDays: {
    opacity: 0.6,
  },
  // bloglistleftWidgetPostAuthorAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  bloglistleftWidgetBlogListviewCardP: {
    fontSize: 15,
    lineHeight: 27,
    color: '#666',
    height: 55,
    overflow: 'hidden',
    // textOverflow: 'ellipsis',
  },
  bloglistleftWidgetBlogListviewBlogImg: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  bloglistleftWidgetBlogListviewBlogCategory: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  bloglistleftWidgetBlogListviewBlogCategoryA: {
    backgroundColor: '#4c82f7',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 4,
    fontSize: 14,
    color: '#fff',
    marginRight: 13,
    marginLeft: 0,
    marginBottom: 0,
    display: 'flex', // 'inline-block'
  },

  // 17. Blog Details
  blogbanner: {
    position: 'relative',
    // background: 'url("../../public/assets/img/blog/blogbanner.jpg")', // Non supporté
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed', // Non supporté
    textAlign: 'center',
    paddingVertical: 90,
    paddingHorizontal: 0,
    overflow: 'hidden',
    zIndex: 1,
    minHeight: 600,
  },
  // blogbannerAfter: { // Pseudo-elements non supportés
  //   content: '',
  //   background: 'linear-gradient(0deg, #000000 16.31%, rgba(0, 0, 0, 0) 100%)',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   zIndex: -1,
  // },
  blogbannerContent: {
    position: 'absolute',
    bottom: 40,
    textAlign: 'center',
    width: '100%',
    color: '#fff',
  },
  blogbannerContentUl: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blogbannerContentH1: {
    color: '#fff',
    fontWeight: '700',
    margin: 0,
    marginBottom: 15,
  },
  blogbannerContentPostAuthorImg: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginRight: 10,
  },
  blogbannerContentPostAuthorImgImg: {
    borderRadius: 50,
    width: 32,
    height: 32,
  },
  blogbannerContentPostAuthorBloggridSidebarPostAuthorBloglistleftWidgetPostAuthor: {
    display: 'flex',
    alignItems: 'center',
  },
  bloggridSidebarBlogGridBlogPostAuthorA: {
    margin: 0,
  },
  // blogbannerContentPostAuthorAHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  blogbannerContentPostAuthorA: {
    fontSize: 16,
    color: '#fff',
  },
  blogbannerContentEntryMetaLi: {
    marginRight: 20,
  },
  blogbannerContentDateIconIBlogbannerContentPostAuthorImg: {
    marginRight: 5,
  },
  blogbannerContentSpanBlogHint: {
    backgroundColor: '#22c55e',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 4,
    margin: 0,
    marginBottom: 15,
    display: 'flex', // 'inline-block'
    fontSize: 14,
  },
  blogdetailContent: {
    paddingVertical: 70,
    paddingHorizontal: 0,
    backgroundColor: '#f9fafc',
  },
  blogdetailContentP: {
    color: '#666',
    lineHeight: 27,
  },
  blogQuotes: {
    backgroundColor: '#fff',
    padding: 30,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 20,
  },
  blogQuotesI: {
    fontSize: 52,
    color: '#c10037',
  },
  blogQuotesImg: {
    margin: 0,
    marginBottom: 10,
  },
  blogQuotesH6: {
    color: '#374b5c',
    fontWeight: '700',
    margin: 0,
  },
  bloginnerImg: {
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 0,
    marginRight: 0,
  },
  bloginnerImgImg: {
    width: '100%',
    borderRadius: 20,
  },
  requiremntsInfoH5: {
    fontSize: 24,
    fontWeight: '700',
    color: '#374b5c',
    margin: 0,
    marginBottom: 20,
  },
  requiremntsInfoLi: {
    // listStyle: 'disc', // Non supporté
    margin: 0,
    marginBottom: 15,
    lineHeight: 27,
    color: '#666',
  },
  requiremntsInfoUl: {
    margin: 0,
    marginLeft: 17,
    marginBottom: 0,
  },
  tagList: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  tagListTags: {
    display: 'flex',
  },
  tagListTagsLi: {
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    paddingVertical: 7,
    paddingHorizontal: 15,
    fontSize: 14,
    marginRight: 15,
    borderRadius: 5,
    color: '#666',
    // cursor: 'pointer',
  },
  // tagListTagsLiHover: { // Gestion d'état
  //   backgroundColor: '#c10037',
  //   color: '#fff',
  // },
  tagListTagsLiLastChild: {
    marginRight: 0,
  },
  sharePostsection: {
    borderTopWidth: 1,
    borderTopColor: '#e9e9e9',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    paddingVertical: 30,
    paddingHorizontal: 0,
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 0,
    marginRight: 0,
  },
  sharePostsectionSharelinkShareImg: {
    color: '#c10037',
    backgroundColor: '#edeff3',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 20,
    borderRadius: 50,
    marginRight: 10,
  },
  // sharePostsectionSharelinkShareImgHover: { // Gestion d'état
  //   color: '#fff',
  //   backgroundColor: '#c10037',
  // },
  sharePostsectionSharelinkA: {
    color: '#666',
    fontSize: 14,
  },
  // sharePostsectionSharelinkAShareTextHover: { // Gestion d'état
  //   color: '#c10037',
  // },
  blogdetailsPaginationUl: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  blogdetailsPaginationUlLiLastChild: {
    textAlign: 'right',
  },
  blogdetailsPaginationUlLiPrevLinkBlogdetailsPaginationUlLiNextLink: {
    color: '#c10037',
    fontSize: 14,
    margin: 0,
    marginBottom: 20,
    display: 'flex', // 'block'
  },
  blogdetailsPaginationUlLiPrevLinkI: {
    marginRight: 7,
  },
  blogdetailsPaginationUlLiNextLinkI: {
    marginLeft: 7,
  },
  blogdetailsPaginationUlLiH3: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0d233e',
    margin: 0,
    marginBottom: 25,
  },
  // blogdetailsPaginationUlLiH3Hover: { // Gestion d'état
  //   color: '#c10037',
  // },
  blogdetailContentCardHeader: {
    paddingVertical: 0,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e7',
    margin: 0,
    marginBottom: 25,
    display: 'flex',
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  blogdetailContentCardBody: {
    padding: 0,
  },
  blogdetailContentCardReviewSec: {
    marginTop: 25,
  },
  blogdetailContentCardHeaderH4: {
    fontSize: 22,
    margin: 0,
    marginLeft: 12,
    marginBottom: 0,
    fontWeight: '700',
  },
  blogdetailContentFeedbackboxReviewDetailsH6BlogdetailContentCardHeaderH4: {
    color: '#0d233e',
    fontSize: 20,
  },
  blogdetailContentFeedbackboxReviewDetailsH6: {
    margin: 0,
    marginBottom: 30,
  },

  // 18. About Page
  innerbannerBlogbannerImgImg: {
    minHeight: 250,
  },
  aboutbanner: {
    position: 'relative',
    // background: 'url("../../public/assets/img/banner/aboutbanner.jpg")', // Non supporté
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    paddingTop: 170,
    paddingBottom: 90,
    paddingHorizontal: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  // innerbannerAfter: { // Pseudo-elements non supportés
  //   content: '',
  //   background: 'linear-gradient(0deg, #000000 16.31%, rgba(0, 0, 0, 0) 100%)',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   zIndex: -1,
  // },
  innerbannerBreadcrumbTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
  },
  aboutContent: {
    paddingVertical: 70,
    paddingHorizontal: 0,
    backgroundColor: '#f9fafc',
  },
  aboutListee: {
    position: 'relative',
    display: 'flex',
  },
  aboutImg: {
    width: '100%',
  },
  aboutImgImg: {
    borderRadius: 20,
  },
  aboutInfo: {
    width: '50%',
    position: 'absolute',
    right: 78,
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 10,
    top: '50%',
    transform: [{ translateY: '-50%' }],
  },
  aboutInfoP: {
    color: '#666',
    lineHeight: 27,
    marginBottom: 30,
  },
  aboutInfoPLastChild: {
    margin: 0,
  },
  aboutInfoH4: {
    color: '#0d233e',
    fontSize: 36,
    fontWeight: '700',
    margin: 0,
    marginBottom: 30,
  },
  aboutInfoH4Span: {
    color: '#c10037',
  },
  howitworks: {
    backgroundColor: '#f9fafc',
    textAlign: 'center',
  },
  howitworksH3: {
    color: '#c10037',
    fontSize: 36,
    fontWeight: '700',
    margin: 0,
    marginBottom: 40,
  },
  howitworksP: {
    color: '#666',
    lineHeight: 27,
    margin: 0,
    marginBottom: 20,
  },
  howitworksHowitworkInfoP: {
    margin: 0,
  },
  howitworkInfo: {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 10,
    padding: 20,
    margin: 30,
    marginTop: 30,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  howitworkInfoH5: {
    fontSize: 60,
    fontWeight: '800',
    color: '#374b5c',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    marginBottom: 25,
  },
  howitworkInfoH6: {
    fontSize: 24,
    fontWeight: '800',
    margin: 0,
    marginBottom: 25,
  },
  // howitworkInfoH5After: { // Pseudo-elements non supportés
  //   content: '',
  //   borderTopWidth: 4,
  //   borderTopColor: '#374b5c',
  //   display: 'flex', // 'inline-block'
  //   width: 'calc(100% - 110px)',
  //   position: 'absolute',
  //   top: 35,
  //   left: 78,
  // },
  // ... continuez pour les autres sections ...
});

export default globalStyles;
