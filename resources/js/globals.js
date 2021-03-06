cities = [ 
	"Barking and Dagenham, UK", 
	"Barnet, UK", 
	"Bexley, UK", 
	"Bromley, UK", 
	"Cheshunt, UK", 
	"Dorking, UK", 
	"Ealing, UK", 
	"Greenwich, UK", 
	"Guildford, UK", 
	"Hatfield, UK", 
	"Havering, UK", 
	"Hempstead, UK", 
	"Hillingdon, UK", 
	"Hounslow, UK", 
	"Kingston upon Thames, UK",
	"Loughton, UK",
	"Slough, UK", 
	"St. Albans, UK", 
	"Uxbridge, UK", 
	"Watford, UK", 
	"Welwyn Garden City, UK"];

/* Removed for now: "Brent, UK", "Croydon, UK", "Enfield, UK",  "Harlow, UK", "Merton, UK", "Richmond upon Thames, UK", "Sutton, UK", "Waltham Forest, UK", "Wembley, UK" */
congestion_zone = [ new google.maps.LatLng(51.489296,-0.130644),new google.maps.LatLng(51.488941,-0.129892),new google.maps.LatLng(51.488762,-0.129503),new google.maps.LatLng(51.488663,-0.129146),new google.maps.LatLng(51.488319,-0.128364),new google.maps.LatLng(51.487110,-0.125691),new google.maps.LatLng(51.486916,-0.125295),new google.maps.LatLng(51.486748,-0.124711),new google.maps.LatLng(51.486561,-0.123972),new google.maps.LatLng(51.486496,-0.123620),new google.maps.LatLng(51.486401,-0.123218),new google.maps.LatLng(51.486279,-0.122208),new google.maps.LatLng(51.486256,-0.121639),new google.maps.LatLng(51.486263,-0.120938),new google.maps.LatLng(51.486389,-0.119916),new google.maps.LatLng(51.486782,-0.117310),new google.maps.LatLng(51.486897,-0.116466),new google.maps.LatLng(51.486973,-0.115268),new google.maps.LatLng(51.487007,-0.113783),new google.maps.LatLng(51.487068,-0.113181),new google.maps.LatLng(51.487175,-0.112870),new google.maps.LatLng(51.487320,-0.112503),new google.maps.LatLng(51.487560,-0.112151),new google.maps.LatLng(51.487904,-0.111858),new google.maps.LatLng(51.488205,-0.111610),new google.maps.LatLng(51.488392,-0.111468),new google.maps.LatLng(51.488544,-0.111397),new google.maps.LatLng(51.488972,-0.110905),new google.maps.LatLng(51.489216,-0.110394),new google.maps.LatLng(51.489357,-0.109869),new google.maps.LatLng(51.489841,-0.108207),new google.maps.LatLng(51.490025,-0.107723),new google.maps.LatLng(51.490536,-0.106749),new google.maps.LatLng(51.490749,-0.106310),new google.maps.LatLng(51.490856,-0.105952),new google.maps.LatLng(51.490978,-0.105303),new google.maps.LatLng(51.491199,-0.104070),new google.maps.LatLng(51.491325,-0.103524),new google.maps.LatLng(51.491447,-0.103211),new google.maps.LatLng(51.491871,-0.102645),new google.maps.LatLng(51.492687,-0.101366),new google.maps.LatLng(51.492920,-0.101101),new google.maps.LatLng(51.493214,-0.100964),new google.maps.LatLng(51.493416,-0.100909),new google.maps.LatLng(51.493622,-0.100874),new google.maps.LatLng(51.493927,-0.100885),new google.maps.LatLng(51.494606,-0.100924),new google.maps.LatLng(51.494736,-0.100936),new google.maps.LatLng(51.494911,-0.101285),new google.maps.LatLng(51.495022,-0.101486),new google.maps.LatLng(51.495274,-0.101344),new google.maps.LatLng(51.495461,-0.101250),new google.maps.LatLng(51.495571,-0.101207),new google.maps.LatLng(51.495651,-0.101102),new google.maps.LatLng(51.495693,-0.100911),new google.maps.LatLng(51.495670,-0.100378),new google.maps.LatLng(51.495621,-0.100136),new google.maps.LatLng(51.495537,-0.099954),new google.maps.LatLng(51.495430,-0.099873),new google.maps.LatLng(51.495255,-0.099755),new google.maps.LatLng(51.495136,-0.099035),new google.maps.LatLng(51.494770,-0.097227),new google.maps.LatLng(51.494389,-0.095451),new google.maps.LatLng(51.494228,-0.094557),new google.maps.LatLng(51.494232,-0.094208),new google.maps.LatLng(51.494270,-0.091103),new google.maps.LatLng(51.494312,-0.088947),new google.maps.LatLng(51.494354,-0.087147),new google.maps.LatLng(51.494354,-0.086792),new google.maps.LatLng(51.494419,-0.086684),new google.maps.LatLng(51.494968,-0.086409),new google.maps.LatLng(51.495106,-0.086210),new google.maps.LatLng(51.494850,-0.084823),new google.maps.LatLng(51.494873,-0.084743),new google.maps.LatLng(51.495247,-0.084093),new google.maps.LatLng(51.495598,-0.083570),new google.maps.LatLng(51.495865,-0.083209),new google.maps.LatLng(51.496056,-0.082980),new google.maps.LatLng(51.496330,-0.082728),new google.maps.LatLng(51.496494,-0.082458),new google.maps.LatLng(51.496765,-0.081913),new google.maps.LatLng(51.497158,-0.080992),new google.maps.LatLng(51.497353,-0.080524),new google.maps.LatLng(51.497513,-0.080192),new google.maps.LatLng(51.497631,-0.080007),new google.maps.LatLng(51.497761,-0.079902),new google.maps.LatLng(51.498768,-0.079396),new google.maps.LatLng(51.499699,-0.078978),new google.maps.LatLng(51.501392,-0.078205),new google.maps.LatLng(51.502117,-0.077825),new google.maps.LatLng(51.502357,-0.077677),new google.maps.LatLng(51.502457,-0.077818),new google.maps.LatLng(51.502724,-0.078220),new google.maps.LatLng(51.502895,-0.078468),new google.maps.LatLng(51.503101,-0.078345),new google.maps.LatLng(51.502979,-0.077815),new google.maps.LatLng(51.502914,-0.077513),new google.maps.LatLng(51.502937,-0.077304),new google.maps.LatLng(51.502972,-0.077247),new google.maps.LatLng(51.503769,-0.076724),new google.maps.LatLng(51.504444,-0.076295),new google.maps.LatLng(51.506718,-0.074786),new google.maps.LatLng(51.507065,-0.074552),new google.maps.LatLng(51.507149,-0.074502),new google.maps.LatLng(51.507534,-0.074421),new google.maps.LatLng(51.509197,-0.074059),new google.maps.LatLng(51.509277,-0.074090),new google.maps.LatLng(51.509388,-0.074216),new google.maps.LatLng(51.509605,-0.074497),new google.maps.LatLng(51.509701,-0.074695),new google.maps.LatLng(51.509747,-0.074814),new google.maps.LatLng(51.509747,-0.074955),new google.maps.LatLng(51.509930,-0.075049),new google.maps.LatLng(51.510052,-0.075071),new google.maps.LatLng(51.510101,-0.075061),new google.maps.LatLng(51.511124,-0.075288),new google.maps.LatLng(51.511265,-0.075329),new google.maps.LatLng(51.511292,-0.074825),new google.maps.LatLng(51.511303,-0.073382),new google.maps.LatLng(51.511311,-0.073231),new google.maps.LatLng(51.511330,-0.073165),new google.maps.LatLng(51.511383,-0.073137),new google.maps.LatLng(51.511589,-0.073151),new google.maps.LatLng(51.512249,-0.073274),new google.maps.LatLng(51.512939,-0.073370),new google.maps.LatLng(51.513191,-0.073414),new google.maps.LatLng(51.513401,-0.073467),new google.maps.LatLng(51.513779,-0.073584),new google.maps.LatLng(51.513958,-0.073701),new google.maps.LatLng(51.514114,-0.073815),new google.maps.LatLng(51.514259,-0.073942),new google.maps.LatLng(51.514343,-0.074040),new google.maps.LatLng(51.514362,-0.074117),new google.maps.LatLng(51.514355,-0.074279),new google.maps.LatLng(51.514469,-0.074393),new google.maps.LatLng(51.514572,-0.074362),new google.maps.LatLng(51.514652,-0.074084),new google.maps.LatLng(51.514633,-0.073941),new google.maps.LatLng(51.514656,-0.073833),new google.maps.LatLng(51.515106,-0.072552),new google.maps.LatLng(51.515224,-0.072207),new google.maps.LatLng(51.515278,-0.072125),new google.maps.LatLng(51.515335,-0.072095),new google.maps.LatLng(51.515427,-0.072114),new google.maps.LatLng(51.515610,-0.072275),new google.maps.LatLng(51.516426,-0.073032),new google.maps.LatLng(51.517120,-0.073535),new google.maps.LatLng(51.518261,-0.074471),new google.maps.LatLng(51.518394,-0.074613),new google.maps.LatLng(51.518635,-0.074642),new google.maps.LatLng(51.519176,-0.074657),new google.maps.LatLng(51.519688,-0.074610),new google.maps.LatLng(51.520111,-0.074593),new google.maps.LatLng(51.520283,-0.074652),new google.maps.LatLng(51.520428,-0.074757),new google.maps.LatLng(51.520695,-0.075005),new google.maps.LatLng(51.521091,-0.075428),new google.maps.LatLng(51.521648,-0.076096),new google.maps.LatLng(51.522034,-0.076629),new google.maps.LatLng(51.522362,-0.077039),new google.maps.LatLng(51.522629,-0.077404),new google.maps.LatLng(51.522717,-0.077604),new google.maps.LatLng(51.522846,-0.078028),new google.maps.LatLng(51.523148,-0.078552),new google.maps.LatLng(51.523621,-0.079316),new google.maps.LatLng(51.523716,-0.079514),new google.maps.LatLng(51.523628,-0.080510),new google.maps.LatLng(51.524330,-0.080456),new google.maps.LatLng(51.524670,-0.081014),new google.maps.LatLng(51.524902,-0.081487),new google.maps.LatLng(51.525173,-0.082054),new google.maps.LatLng(51.525593,-0.082826),new google.maps.LatLng(51.525932,-0.083511),new google.maps.LatLng(51.526066,-0.083865),new google.maps.LatLng(51.526134,-0.084096),new google.maps.LatLng(51.526154,-0.084412),new google.maps.LatLng(51.526161,-0.084812),new google.maps.LatLng(51.526154,-0.085002),new google.maps.LatLng(51.526127,-0.085204),new google.maps.LatLng(51.526028,-0.085649),new google.maps.LatLng(51.525818,-0.086514),new google.maps.LatLng(51.525742,-0.086766),new google.maps.LatLng(51.525642,-0.086895),new google.maps.LatLng(51.525364,-0.087185),new google.maps.LatLng(51.525295,-0.087278),new google.maps.LatLng(51.525288,-0.087703),new google.maps.LatLng(51.525475,-0.088163),new google.maps.LatLng(51.525490,-0.088236),new google.maps.LatLng(51.525612,-0.088282),new google.maps.LatLng(51.525723,-0.088218),new google.maps.LatLng(51.526016,-0.087934),new google.maps.LatLng(51.526100,-0.087916),new google.maps.LatLng(51.526237,-0.087967),new google.maps.LatLng(51.526451,-0.088065),new google.maps.LatLng(51.526814,-0.088300),new google.maps.LatLng(51.527142,-0.088562),new google.maps.LatLng(51.527287,-0.088711),new google.maps.LatLng(51.527393,-0.088913),new google.maps.LatLng(51.527534,-0.089352),new google.maps.LatLng(51.528168,-0.091731),new google.maps.LatLng(51.528526,-0.093160),new google.maps.LatLng(51.529659,-0.097581),new google.maps.LatLng(51.530357,-0.100227),new google.maps.LatLng(51.530773,-0.101834),new google.maps.LatLng(51.529709,-0.102534),new google.maps.LatLng(51.531097,-0.104612),new google.maps.LatLng(51.531456,-0.105217),new google.maps.LatLng(51.531654,-0.105561),new google.maps.LatLng(51.531742,-0.105728),new google.maps.LatLng(51.531803,-0.106046),new google.maps.LatLng(51.531822,-0.106470),new google.maps.LatLng(51.531773,-0.108602),new google.maps.LatLng(51.531708,-0.109828),new google.maps.LatLng(51.531513,-0.111366),new google.maps.LatLng(51.531292,-0.114023),new google.maps.LatLng(51.530163,-0.115361),new google.maps.LatLng(51.529968,-0.115614),new google.maps.LatLng(51.529785,-0.115779),new google.maps.LatLng(51.529381,-0.115719),new google.maps.LatLng(51.528728,-0.118818),new google.maps.LatLng(51.528561,-0.119578),new google.maps.LatLng(51.528969,-0.119927),new google.maps.LatLng(51.529942,-0.120701),new google.maps.LatLng(51.530178,-0.120912),new google.maps.LatLng(51.530277,-0.121039),new google.maps.LatLng(51.530361,-0.121194),new google.maps.LatLng(51.530437,-0.121511),new google.maps.LatLng(51.530499,-0.121832),new google.maps.LatLng(51.530540,-0.122096),new google.maps.LatLng(51.530540,-0.122364),new google.maps.LatLng(51.530499,-0.122589),new google.maps.LatLng(51.530319,-0.123026),new google.maps.LatLng(51.530079,-0.123614),new google.maps.LatLng(51.529709,-0.124366),new google.maps.LatLng(51.529045,-0.126057),new google.maps.LatLng(51.528461,-0.127506),new google.maps.LatLng(51.527973,-0.128770),new google.maps.LatLng(51.527630,-0.129628),new google.maps.LatLng(51.527187,-0.130863),new google.maps.LatLng(51.526237,-0.133624),new google.maps.LatLng(51.525719,-0.135254),new google.maps.LatLng(51.525536,-0.135803),new google.maps.LatLng(51.524624,-0.134815),new google.maps.LatLng(51.523598,-0.137361),new google.maps.LatLng(51.524715,-0.138151),new google.maps.LatLng(51.524765,-0.138197),new google.maps.LatLng(51.524796,-0.138276),new google.maps.LatLng(51.524704,-0.138740),new google.maps.LatLng(51.524467,-0.139769),new google.maps.LatLng(51.524277,-0.140650),new google.maps.LatLng(51.523972,-0.142103),new google.maps.LatLng(51.523861,-0.142875),new google.maps.LatLng(51.523804,-0.143245),new google.maps.LatLng(51.523708,-0.143490),new google.maps.LatLng(51.523560,-0.143698),new google.maps.LatLng(51.523365,-0.144053),new google.maps.LatLng(51.523251,-0.144292),new google.maps.LatLng(51.523926,-0.144395),new google.maps.LatLng(51.523941,-0.144788),new google.maps.LatLng(51.523880,-0.145028),new google.maps.LatLng(51.523758,-0.145007),new google.maps.LatLng(51.523674,-0.145015),new google.maps.LatLng(51.523514,-0.145059),new google.maps.LatLng(51.523415,-0.145112),new google.maps.LatLng(51.523254,-0.145232),new google.maps.LatLng(51.523129,-0.145379),new google.maps.LatLng(51.523048,-0.145496),new google.maps.LatLng(51.522957,-0.145680),new google.maps.LatLng(51.522861,-0.145946),new google.maps.LatLng(51.522808,-0.146221),new google.maps.LatLng(51.522785,-0.146390),new google.maps.LatLng(51.522778,-0.146571),new google.maps.LatLng(51.522785,-0.146750),new google.maps.LatLng(51.522804,-0.146939),new google.maps.LatLng(51.522839,-0.147114),new google.maps.LatLng(51.522896,-0.147307),new google.maps.LatLng(51.522945,-0.147451),new google.maps.LatLng(51.523045,-0.147649),new google.maps.LatLng(51.523163,-0.147827),new google.maps.LatLng(51.523304,-0.147967),new google.maps.LatLng(51.523392,-0.148030),new google.maps.LatLng(51.523216,-0.149139),new google.maps.LatLng(51.523075,-0.150475),new google.maps.LatLng(51.523014,-0.151148),new google.maps.LatLng(51.522968,-0.151827),new google.maps.LatLng(51.522888,-0.152498),new google.maps.LatLng(51.522728,-0.153437),new google.maps.LatLng(51.521988,-0.157356),new google.maps.LatLng(51.520855,-0.156828),new google.maps.LatLng(51.520424,-0.159203),new google.maps.LatLng(51.521576,-0.159695),new google.maps.LatLng(51.521034,-0.162958),new google.maps.LatLng(51.520699,-0.164810),new google.maps.LatLng(51.520611,-0.165301),new google.maps.LatLng(51.520161,-0.165577),new google.maps.LatLng(51.519833,-0.165710),new google.maps.LatLng(51.519222,-0.165877),new google.maps.LatLng(51.519012,-0.166054),new google.maps.LatLng(51.518616,-0.166569),new google.maps.LatLng(51.518345,-0.166907),new google.maps.LatLng(51.518227,-0.167071),new google.maps.LatLng(51.518112,-0.167147),new google.maps.LatLng(51.518009,-0.167116),new google.maps.LatLng(51.517452,-0.166304),new google.maps.LatLng(51.515427,-0.163339),new google.maps.LatLng(51.514755,-0.162365),new google.maps.LatLng(51.513817,-0.160902),new google.maps.LatLng(51.513378,-0.160170),new google.maps.LatLng(51.513340,-0.160066),new google.maps.LatLng(51.513325,-0.159957),new google.maps.LatLng(51.513515,-0.158283),new google.maps.LatLng(51.512180,-0.157672),new google.maps.LatLng(51.510761,-0.156952),new google.maps.LatLng(51.510513,-0.156806),new google.maps.LatLng(51.510277,-0.156603),new google.maps.LatLng(51.510044,-0.156292),new google.maps.LatLng(51.509895,-0.156140),new google.maps.LatLng(51.509651,-0.155791),new google.maps.LatLng(51.509430,-0.155451),new google.maps.LatLng(51.509117,-0.155029),new google.maps.LatLng(51.508507,-0.154345),new google.maps.LatLng(51.507755,-0.153507),new google.maps.LatLng(51.507191,-0.152849),new google.maps.LatLng(51.506660,-0.152205),new google.maps.LatLng(51.506393,-0.151871),new google.maps.LatLng(51.506073,-0.151508),new google.maps.LatLng(51.505920,-0.151320),new google.maps.LatLng(51.505714,-0.151099),new google.maps.LatLng(51.505531,-0.150955),new google.maps.LatLng(51.505383,-0.150887),new google.maps.LatLng(51.505180,-0.150825),new google.maps.LatLng(51.504944,-0.150784),new google.maps.LatLng(51.504711,-0.150812),new google.maps.LatLng(51.504589,-0.150836),new google.maps.LatLng(51.504040,-0.151015),new google.maps.LatLng(51.503933,-0.151013),new google.maps.LatLng(51.503773,-0.150969),new google.maps.LatLng(51.503551,-0.150883),new google.maps.LatLng(51.503452,-0.150821),new google.maps.LatLng(51.503403,-0.150704),new google.maps.LatLng(51.503391,-0.150409),new google.maps.LatLng(51.503349,-0.150042),new google.maps.LatLng(51.503296,-0.149899),new google.maps.LatLng(51.503204,-0.149761),new google.maps.LatLng(51.503094,-0.149655),new google.maps.LatLng(51.503021,-0.149636),new google.maps.LatLng(51.502663,-0.149669),new google.maps.LatLng(51.502457,-0.149718),new google.maps.LatLng(51.502285,-0.149925),new google.maps.LatLng(51.502167,-0.150276),new google.maps.LatLng(51.501949,-0.150874),new google.maps.LatLng(51.501896,-0.151045),new google.maps.LatLng(51.501831,-0.151149),new google.maps.LatLng(51.501755,-0.151149),new google.maps.LatLng(51.501541,-0.150954),new google.maps.LatLng(51.501247,-0.150524),new google.maps.LatLng(51.500954,-0.150065),new google.maps.LatLng(51.500637,-0.149539),new google.maps.LatLng(51.500320,-0.149082),new google.maps.LatLng(51.499859,-0.148399),new google.maps.LatLng(51.499596,-0.148122),new google.maps.LatLng(51.499100,-0.147700),new google.maps.LatLng(51.498447,-0.147124),new google.maps.LatLng(51.498367,-0.147046),new google.maps.LatLng(51.498318,-0.146958),new google.maps.LatLng(51.498280,-0.146790),new google.maps.LatLng(51.498295,-0.146463),new google.maps.LatLng(51.498299,-0.145986),new google.maps.LatLng(51.498310,-0.145474),new google.maps.LatLng(51.498302,-0.145054),new google.maps.LatLng(51.498257,-0.144636),new google.maps.LatLng(51.498203,-0.144312),new google.maps.LatLng(51.498138,-0.143957),new google.maps.LatLng(51.498077,-0.143666),new google.maps.LatLng(51.497982,-0.143158),new google.maps.LatLng(51.497890,-0.142736),new google.maps.LatLng(51.497826,-0.142511),new google.maps.LatLng(51.497723,-0.142291),new google.maps.LatLng(51.497601,-0.142129),new google.maps.LatLng(51.497471,-0.141990),new google.maps.LatLng(51.497295,-0.141894),new google.maps.LatLng(51.497017,-0.141784),new google.maps.LatLng(51.496738,-0.141699),new google.maps.LatLng(51.496597,-0.141865),new google.maps.LatLng(51.496464,-0.142226),new google.maps.LatLng(51.496433,-0.142380),new google.maps.LatLng(51.496391,-0.142492),new google.maps.LatLng(51.496250,-0.142432),new google.maps.LatLng(51.495872,-0.142211),new google.maps.LatLng(51.495483,-0.141981),new google.maps.LatLng(51.494900,-0.141495),new google.maps.LatLng(51.494320,-0.140904),new google.maps.LatLng(51.494102,-0.140632),new google.maps.LatLng(51.493935,-0.140403),new google.maps.LatLng(51.493755,-0.139993),new google.maps.LatLng(51.493031,-0.138471),new google.maps.LatLng(51.491882,-0.136062),new google.maps.LatLng(51.490978,-0.134186),new google.maps.LatLng(51.490349,-0.132842),new google.maps.LatLng(51.489712,-0.131525), new google.maps.LatLng(51.489296,-0.130644) ];
inter_stations = [ 
	{
		"name":		    "NCP Portman Square",
		"address":		"Unknown",
		"coordinates":	"51.516617,-0.157328"	
	}, {
		"name":		    "NCP Mortimer Street",
		"address":		"Unknown",
		"coordinates":	"51.517960,-0.137539"
	}, {
		"name":		    "Bloomsbury Square Car Parks",
		"address":		"Bloomsbury Square, London WC1A 2RJ, UK",
		"coordinates":	"51.518986,-0.123146"	
	}, {
		"name":		    "National Car Parks Ltd",
		"address":		"Unknown",
		"coordinates":	"51.521072,-0.108972"	
	}, {
		"name":		    "Saffron Hill Car Park",
		"address":		"Unknown",
		"coordinates":	"51.521080,-0.107052"
	}, {
		"name":		    "Aldersgate Street Car Park",
		"address":		"Unknown",
		"coordinates":	"51.518463,-0.097053"	
	}, {
		"name":		    "Finsbury Square Car Park",
		"address":		"Unknown",
		"coordinates":	"51.521496,-0.086399"	
	}, {
		"name":		    "39 America Street",
		"address":		"London SE1 0NJ, UK",
		"coordinates":	"51.504330,-0.096366"	
	}, {
		"name":		    "Westminster car park",
		"address":		"Unknown",
		"coordinates":	"51.495750,-0.131500"
	}, {
		"name":		    "7-9 Denman St",
		"address":		"Unknown",
		"coordinates":	"51.510761,-0.134864"	
	}, {
		"name":		    "Cornwall Road Car Park",
		"address":		"Unknown",
		"coordinates":	"51.506069,-0.111666"	
	}, {
		"name":		    "Car Park - Waterloo",
		"address":		"Waterloo C Car Park, Lambeth, London SE1, UK",
		"coordinates":	"51.504627,-0.117041"	
	}, {
		"name":		    "Spring Gardens Car Park - Trafalgar",
		"address":		"Cockspur Court, St. James's, London, UK",
		"coordinates":	"51.507240,-0.129838"
	}, {
		"name":		    "Car Park - Regent Street",
		"address":		"London NW1 8BS, UK",
		"coordinates":	"51.510574,-0.140827"
	}, {
		"name":		    "Car Park - Mayfair",
		"address":		"Achilles Way, Mayfair, London W1K 1AB, UK",
		"coordinates":	"51.507549,-0.150327"	
	}, {
		"name":		    "Westiminster Car Park",
		"address":		"Unknown",
		"coordinates":	"51.497547,-0.126450"	
	}, {
		"name":		    "70 Ewer Street	",
		"address":		"London SE1 0NL, UK	",
		"coordinates":	"51.504430,-0.098873"
	}, {
		"name":		    "National Car Parks",
		"address":		"Unknown",
		"coordinates":	"51.512135,-0.134995"
	}, {
		"name":		    "NCP Car Park - High Holborn",
		"address":		"Unknown",
		"coordinates":	"51.516617,-0.124701"
	}
];

outer_stations = [
	{
		"name":		    "Car park - Old Street (narrow)",
		"address":		"244-278 Crondall Street, London N1 6JF, UK",
		"coordinates":	"51.530865,-0.080689"	
	}, {
		"name":		    "Car Park - Wigmore Street",
		"address":		"Wigmore, at Car Park, Gillingham, Medway ME7, UK",
		"coordinates":	"51.33669, 0.5818199999999933"	
	}, {
		"name":		    "Car Park - Knightsbridge",
		"address":		"Unknown",
		"coordinates":	"51.504066,-0.156126"	
	},{
		"name":		    "Car Park Hilton London Islington",
		"address":		"Unknown",
		"coordinates":	"51.535946,-0.104810"	
	}, {
		"name":		    "Westminster City Car Parks",
		"address":		"Unknown",
		"coordinates":	"51.510952,-0.186935"
	},{
		"name":		    "Q Park - Butlers Wharf - Design Museum",
		"address":		"NCP Cardogan Place",
		"coordinates":	"51.497883,-0.157896"	
	},{
		"name":		    "16 Semley Place",
		"address":		"London SW1W 9QJ, UK",
		"coordinates":	"51.492252,-0.150408"
	},{
		"name":		    "Parking Partnership Limited",
		"address":		"18 St George Wharf, London SW8 2LP, UK",
		"coordinates":	"51.485131,-0.125701"	
	},{
		"name":		    "62 Wandsworth Road",
		"address":		"London SW8 2LF, UK",
		"coordinates":	"51.481544,-0.128236"	
	},{
		"name":		    "181-183 Kennington Lane",
		"address":		"London SE11 4EZ, UK",
		"coordinates":	"51.488753,-0.110750"
	},{
		"name":		    "110 Elephant Road",
		"address":		"London SE17 1LB, UK",
		"coordinates":	"51.493828,-0.098647"
	}, {
		"name":		    "5 Garden Terrace, Lillington and Longmoore Gardens",
		"address":		"London SW1V, UK",
		"coordinates":	"51.490351,-0.134660"
	},{
		"name":		    "Ely & Sidney Ltd, 15 Hanbury Street",
		"address":		"London E1 6QR, UK",
		"coordinates":	"51.520227,-0.073101"
	},{
		"name":		    "36 New Inn Yard",
		"address":		"London EC2A, UK",
		"coordinates":	"51.524498,-0.078920"	
	},{
		"name":		    "93 Leonard Street",
		"address":		"London EC2A 4RD, UK",
		"coordinates":	"51.524852,-0.082031"
	}, {
		"name":		    "2-10 Osborn Street",
		"address":		"London E1 6TD, UK",
		"coordinates":	"51.516063,-0.069693"	
	}, {
		"name":		    "69 Knightsbridge, Belgravia",
		"address":		"London SW1X 7RB, UK",
		"coordinates":	"51.501975,-0.157801"
	}, {
		"name":		    "Unknown",
		"address":		"56-61 Knightsbridge, London SW1X, UK",
		"coordinates":	"51.502274,-0.157587"
	}, {
		"name":		    "Woolworth House, 242-246 Marylebone Road",
		"address":		"London NW1 6JQ, UK",
		"coordinates":	"51.521368,-0.163837"
	}, {
		"name":		    "18-22 Park Road",
		"address":		"London NW1 4SH, UK",
		"coordinates":	"51.525752,-0.161385"
	}, {
		"name":		    "1 West Garden Place",
		"address":		"London W2 2AQ, UK",
		"coordinates":	"51.515747,-0.165000"	
	}, {
		"name":		    "54 Queensway, London W2 3RY, UK",
		"address":		"54 Queensway, London W2 3RY, UK",
		"coordinates":	"51.512039,-0.187285"
	}, {
		"name":		    "137 Pancras Road, London NW1 1UN, UK",
		"address":		"137 Pancras Road, London NW1 1UN, UK",
		"coordinates":	"51.533473,-0.128637"
	}, {
		"name":		    "65 Park Road, London NW1 6XU, UK",
		"address":		"65 Park Road, London NW1 6XU, UK",
		"coordinates":	"51.526090,-0.162248"	
	}, {
		"name":		    "170 Marylebone Road, Marylebone",
		"address":		"London NW1 5AR, UK",
		"coordinates":	"51.522015,-0.159730"
	}, {
		"name":		    "Grant Thornton House",
		"address":		"London NW1, UK",
		"coordinates":	"51.526975, -0.13393"
	}, {
		"name":		    "2-10 Osborn Street",
		"address":		"London E1 6TD, UK",
		"coordinates":	"51.516063,-0.069693"
	}, {
		"name":		    "19-27 Young Street",
		"address":		"London W8 5EH, UK",
		"coordinates":	"51.501946,-0.190132"
	}, {
		"name":		    "Euro Car Park (Royal Garden Hotel)",
		"address":		"Kensington, London W8, UK",
		"coordinates":	"51.502593,-0.188319"
	}, {
		"name":		    "135 Queensway, London",
		"address":		"W2 5HP, UK",
		"coordinates":	"51.516595,-0.189453"	
	}, {
		"name":		    "150 Edgware Road, London W2, UK",
		"address":		"150 Edgware Road, London W2, UK",
		"coordinates":	"51.516910,-0.165578"
	}, {
		"name":		    "2 Lawn House Close",
		"address":		"Isle of Dogs, London E14 9YQ, UK",
		"coordinates":	"51.500096,-0.010483"
	}, {
		"name":		    "Semley House, Semley Place",
		"address":		"London SW1W 9QJ, UK",
		"coordinates":	"51.492177,-0.150014"
	}, {
		"name":		    "? 63-65 Buckhold Road, London SW18, UK",
		"address":		"Unknown",
		"coordinates":	"51.454908,-0.197175"
	}, {
		"name":		    "Charecroft Way",
		"address":		"London W12, UK",
		"coordinates":	"51.50288,-0.21926750000000084"
	}, {
		"name":		    "Selsdon Way London",
		"address":		"E14 9GL United Kingdom",
		"coordinates":	"51.4946009,-0.015076599999929385)"	
	}, {
		"name":		    "The Quadrant Town Centre",
		"address":		"TW9 2NA United Kingdom",
		"coordinates":	"51.4622537,-0.3027280999999675"
	}, {
		"name":		    "St James Rd Kingston upon Thames",
		"address":		"KT1 2BA United Kingdom",
		"coordinates":	"51.4081874,-0.3049220000000332)"
	}, {
		"name":		    "NCP Highgate London Underground Station Car Park",
		"address":		"London N6 5UA United Kingdom",
		"coordinates":	"51.5776464,-0.14693480000005366"
	}, {
		"name":		    "London NW4 4PN United Kingdom",
		"address":		"London NW4 4PN United Kingdom",
		"coordinates":	"51.5807037, -0.2374082000000044"	
	}, {
		"name":		    "London Underground Station Car Park",
		"address":		"Wembley HA9 9AA",
		"coordinates":	"51.5633488,-0.279227100000071"
	}, {
		"name":		    "NCP South Underground Car Park",
		"address":		"Harrow HA2 8HN United Kingdom",
		"coordinates":	"51.5646648,-0.35276010000006863"
	}, {
		"name":		    "NCP Sudbury Town Underground Station",
		"address":		"Wembley HA0 2LA United Kingdom",
		"coordinates":	"51.5517111,-0.3150481000000127"
	}, {
		"name":		    "NCP Ruislip Gardens London Underground Station",
		"address":		"Ruislip HA4 6DP United Kingdom",
		"coordinates":	"51.566868,-0.413076300000057"
	}, {
		"name":		    "NCP Ickenham London Underground Station",
		"address":		"Uxbridge UB10 8PD United Kingdom",
		"coordinates":	"51.5609012,-0.43991779999998926"
	}, {
		"name":		    "NCP Hillingdon London Underground Station Car Park",
		"address":		"Uxbridge UB10 9NR United Kingdom",
		"coordinates":	"51.55377679999999,-0.4498978999999963"
	}, {
		"name":		    "Heathrow Airport Parking - NCP Flightpath",
		"address":		"Bath Rd Sipson West Drayton, Middlesex UB7 0DU, United Kingdom",
		"coordinates":	"51.48101680000001, -0.4212184000000434"	
	}, {
		"name":		    "NCP Hounslow West London Underground Station",
		"address":		"Hounslow TW3 3DH United Kingdom",
		"coordinates":	"51.4731051, -0.3857075999999324"	
	}, {
		"name":		    "NCP Richmond MSCP",
		"address":		"Richmond TW9 2NA United Kingdom",
		"coordinates":	"51.464125,-0.3006550000000061"
	}, {
		"name":		    "NCP Croydon Fairfield",
		"address":		"Croydon CR0 1JN United Kingdom",
		"coordinates":	"51.37154229999999, -0.09511159999999563"	
	}, {
		"name":		    "NCP Alders MSCP",
		"address":		"Croydon CR0 2AA United Kingdom",
		"coordinates":	"51.3750807, -0.09814019999998891"
	}, {
		"name":		    "NCP Dingwall Road",
		"address":		"Croydon CR0 0XH United Kingdom",
		"coordinates":	"51.376165,-0.09823400000004767"
	}, {
		"name":		    "NCP Whitgift Centre MSCP",
		"address":		"Croydon CR0 1LP United Kingdom",
		"coordinates":	"51.3757043, -0.0999967000000197"
	}, {
		"name":		    "NCP Elmfield Road",
		"address":		"Bromley BR1 1TR United Kingdom",
		"coordinates":	"51.4024815, 0.017468799999960538"
	}, {
		"name":		    "NCP Bexleyheath Trading World",
		"address":		"Bexleyheath DA6 7HG United Kingdom",
		"coordinates":	"51.4552269, 0.1420144999999593"	
	}, {
		"name":		    "NCP National Express - Gidea Park Station Car Park",
		"address":		"Romford RM2 6BX United Kingdom	",
		"coordinates":	"51.5817129, 0.20742749999999432"
	}, {
		"name":		    "NCP South Woodford London Underground Station Car Park",
		"address":		"South Woodford E18 1JJ United Kingdom",
		"coordinates":	"51.593384, 0.020673999999985426"
	}, {
		"name":		    "NCP Newbury Park London Underground Station Car Park 2",
		"address":		"Ilford IG2 7RN United Kingdom",
		"coordinates":	"51.575648, 0.09027479999997468"
	}, {
		"name":		    "NCP Leytonstone London Underground Station Car Park",
		"address":		"Leytonstone E11 1HE United Kingdom",
		"coordinates":	"51.5684629, 0.0099831"	
	}, {
		"name":		    "National Car Parks Great Eastern St London",
		"address":		"Islington EC2A 3ER, United Kingdom",
		"coordinates":	"51.5241774, -0.08367680000003475"
	}, {
		"name":		    "NCP Blackhorse Road London Underground Station Car Park",
		"address":		"Walthamstow E17 6ND, United Kingdom",
		"coordinates":	"51.59054099999999, -0.02140699999995377"
	}, {
		"name":		    "NCP Hainault London Underground Station Car Park",
		"address":		"Ilford IG6 3BD United Kingdom",
		"coordinates":	"51.6040044, 0.09417640000003757"
	}, {
		"name":		    "NCP First Capital Connect Palmers Green Car Park",
		"address":		"Palmers Green N13 4PN United Kingdom",
		"coordinates":	"51.623503,-0.10371499999996558"
	}, {
		"name":		    "NCP Arnos Grove London Underground Station Car Park 2",
		"address":		"New Southgate N11 1AN United Kingdom",
		"coordinates":	"51.61100099999999, -0.13546900000005735"
	}, {
		"name":		    "NCP First Capital Connect Cuffley Station Car Park",
		"address":		"Cuffley EN5 4HY United Kingdom",
		"coordinates":	"51.6536045, -0.20480139999995117"	
	}, {
		"name":		    "NCP Cockfosters London Underground Station Car Park",
		"address":		"Barnet EN4 0DZ United Kingdom",
		"coordinates":	"51.6520243,-0.14991669999994883"
	}, {
		"name":		    "NCP Oakwood London Underground Station Car Park",
		"address":		"Enfield N14 4UT United Kingdom",
		"coordinates":	"51.6476378, -0.13185350000003382"
	}, {
		"name":		    "NCP First Capital Connect Enfield Chase Car Park",
		"address":		"Enfield EN2 7AA United Kingdom",
		"coordinates":	"51.6532486, -0.09101450000002842"
	}, {
		"name":		    "NCP First Capital Connect Gordon Hill Car Park",
		"address":		"Enfield United Kingdom",
		"coordinates":	"51.65446499999999, -0.08181400000000849"	
	}, {
		"name":		    "NCP First Capital Connect Elstree & Borehamwood Car park (Permit Only)",
		"address":		"Elstree WD6 3LS United Kingdom",
		"coordinates":	"51.6530494, -0.28067490000000817"
	}, {
		"name":		    "NCP C2C Rail Rainham Station Car Park",
		"address":		"Rainham RM13 9YH United Kingdom",
		"coordinates":	"51.5086483, 0.17988450000007106"	
	}, {
		"name":		    "NCP Buckhurst Hill London Underground Station Car Park",
		"address":		"Buckhurst Hill IG9 5ET United Kingdom",
		"coordinates":	"51.6254779, 0.04123570000001564"
	}, {
		"name":		    "NCP National Express - Brentwood Station Car Park",
		"address":		"Brentwood CM14 4EW United Kingdom",
		"coordinates":	"51.6136841, 0.3000666000000365"
	}, {
		"name":		    "NCP Epping London Underground Station Car Park",
		"address":		"Epping CM16 4HW United Kingdom",
		"coordinates":	"51.6936864, 0.11382560000004105"
	}, {
		"name":		    "NCP First Capital Connect Radlett Car Park",
		"address":		"Radlett WD7 7AP United Kingdom",
		"coordinates":	"51.6846492, -0.31740830000001097"
	}, {
		"name":		    "NCP Croxley London Underground Station Car Park",
		"address":		"Rickmansworth WD3 3DY United Kingdom",
		"coordinates":	"51.638763, -0.474130999999943"
	}, {
		"name" : "National Car Parks Ltd",
		"address": "102 High St Epsom KT19 8EU United Kingdom",
		"coordinates":	"51.33325749999999, -0.26935149999997066"
	}, {
		"name" : "National Car Parks Ltd",
		"address": "50-58 Victoria Rd Surbiton KT6 4NG United Kingdom",
		"coordinates":	"51.3913668, -0.30809529999999086"
	}, {
		"name" : "Fairfield Car Park",
		"address": "St James Rd Kingston upon Thames KT1 2BA United Kingdom",
		"coordinates": "51.4081874, -0.3049220000000332"
	}, {
		"name" : "Eagle Star N.C.P. Car Park",
		"address": "Sutton, Greater London United Kingdom",
		"coordinates": "51.3614279, -0.19396099999994476"
	}, {
		"name" : "Stratford / Bow Interchange",
		"address": "Bow Interchange (Stop T), London E3, UK",
		"coordinates": "51.528648, -0.013406000000031781"
	}
];

/*
waypoints = [];
points = [[37.01352079999999, -122.1966597], [36.9642607, -122.03682709999998], [36.9782408, -122.0459543], [36.979889, -122.059326], [37.060281, -122.13665359999999], [37.03078620000001, -122.15928170000001]];
*/
/* Example here: 
 * https://developers.google.com/maps/documentation/javascript/examples/elevation-paths 
 */
function plotElevation(results, status) {
	if (status != google.maps.ElevationStatus.OK) {
	return;
	}
	var elevations = results;

	// Extract the elevation samples from the returned results
	// and store them in an array of LatLngs.
	var elevationPath = [];
	for (var i = 0; i < results.length; i++) {
	elevationPath.push(elevations[i].location);
	}

	// Display a polyline of the elevation path.
	var pathOptions = {
		path: elevationPath,
		strokeColor: '#0000CC',
		opacity: 0.4,
		map: map
	}

	polyline = new google.maps.Polyline(pathOptions);

	// Extract the data from which to populate the chart.
	// Because the samples are equidistant, the 'Sample'
	// column here does double duty as distance along the
	// X axis.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Sample');
	data.addColumn('number', 'Elevation');
	for (var i = 0; i < results.length; i++) {
		data.addRow(['', elevations[i].elevation]);
	}

	// Draw the chart using the data within its DIV.
	document.getElementById('elevation_chart').style.display = 'block';
	chart.draw(data, {
		height: 150,
		legend: 'none',
		titleY: 'Elevation (m)'
	});
}

function codeAddress(address) {
	geocodeService.geocode( { 'address': address}, function(results, status) {
    	if (status == google.maps.GeocoderStatus.OK) {
        	map.setCenter(results[0].geometry.location);

        	console.log(results)

          	var marker = new google.maps.Marker({
            	map: map,
            	position: results[0].geometry.location
          	});
        } else {
          console.log("Geocode was not successful for the following reason: " + status);
        }
    });
}

function getDirections(start, end, mode, time, callback) {

	if (start == null) { start = new google.maps.LatLng(50.90970040000001, -1.404350900000054); }
	if (end == null) { end = new google.maps.LatLng(51.51121389999999, -0.11982439999997041); }
	if (time == null) { time = new Date() }	
    if (mode == "TRANSIT") { 
        travelMode = google.maps.TravelMode.TRANSIT;
    } else {
        travelMode = google.maps.TravelMode.DRIVING;
    }		

	/* TODO: Convert to UK GMT */
	//console.log(now.getTimezoneOffset());
    var request = {
        origin: start,
        destination: end,
        travelMode: travelMode,
        transitOptions : { departureTime: time }
    };

    var route;

	directionsService.route(request, callback);  

	return route;
}

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

if (typeof(Number.prototype.toMiles) === "undefined") {
  Number.prototype.toMiles = function() {
    return this * 0.00062137;
  }
}

/* Extend Google Maps */
var markersArray = [];
var linesArray = [];
var shapesArray = [];
var overlays = [];
var infoWindowsArray = [];

google.maps.Map.prototype.addMarker = function(location) {
  map.clearMarkers();
      
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
      
  markersArray.push(marker);
};

google.maps.Map.prototype.addMultipleMarkers = function(marker) {  
  markersArray.push(marker);
};

google.maps.Map.prototype.clearMarkers = function() {
    for(var i=0; i < markersArray.length; i++){
    	markersArray[i].setMap(null);
    }
    this.markers = new Array();
};

google.maps.Map.prototype.clearLines = function() {
    for(var i=0; i < linesArray.length; i++){
    	linesArray[i].setMap(null);
    }
};

google.maps.Map.prototype.clearInfoWindows = function() {
    for(var i=0; i < infoWindowsArray.length; i++){
    	infoWindowsArray[i].close();
    }
};

/* from: http://stackoverflow.com/questions/17594401/find-closest-city-to-given-longitude-latitude 
 * TODO: use google.maps.geometry.spherical.computeDistanceBetween() instead */
function compareLatLong(lat1, lon1, lat2, lon2) {
	
    var R = 3958.7558657440545; // Radius of earth in Miles 

	var dLat = (lat2 - lat1).toRad();
	var dLon = (lon2 - lon1).toRad();
	
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;

	return d;
}

function getPolyline(leg, color) {
	if (color == null) { color = "#197b30" }

	var polyline = new google.maps.Polyline({
		path: [],
		strokeColor: color,
		strokeWeight: 4
	});

	var bounds = new google.maps.LatLngBounds();
	
	var legs = route[0].legs;
	
	for (i=0;i<legs.length;i++) {
  		var steps = legs[i].steps;
  		for (j=0;j<steps.length;j++) {
    		var nextSegment = steps[j].path;
    		for (k=0;k<nextSegment.length;k++) {
      			polyline.getPath().push(nextSegment[k]);
      			bounds.extend(nextSegment[k]);
    		}
  		}
	}

	return polyline;
}

Number.prototype.toTime = function(){
	var hrs = Math.floor(this);
	var mins = Math.round(this % 1 * 60);
	var time;
	var hrsString = "hour";
	var minsString = "min";

	//mins = mins < 10 ? "0" + mins : mins.toString();

	if (hrs > 1) { hrsString += "s" };
	if (mins > 1) { minsString += "s" };

	if (hrs == 0) {
		time = mins + " " + minsString;
	} else if (mins == 0) {
		time = hrs + " " + hrsString;
	} else {
		time = hrs + " " + hrsString + " " + mins + " " + minsString;
	}

	return time;
}

String.prototype.toTitleCase = function () {
	var string = "";
	var words = this.split(" ");
  	for(keyvar in words) {
 		string += ' ' + words[keyvar].substr(0,1).toUpperCase()
    	+ words[keyvar].substr(1,words[keyvar].length);
  	}
  	return string;
}