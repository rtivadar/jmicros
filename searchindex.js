Search.setIndex({"docnames": ["exercises/Microstates_teaching", "exercises/Pinars_MVPA_tutorial", "exercises/intro"], "filenames": ["exercises/Microstates_teaching.ipynb", "exercises/Pinars_MVPA_tutorial.ipynb", "exercises/intro.md"], "titles": ["EEG microstate analysis", "Tutorial #6: Applying Machine Learning Methods to Temporal Dimensions of EEG Data", "Introduction to Microstates Analysis"], "terms": {"author": 0, "ruxandra": 0, "tivadar": 0, "code": 0, "adapt": [0, 1, 2], "from": [0, 1], "v": [0, 1], "ferat": 0, "http": [0, 1, 2], "readthedoc": 0, "io": [0, 1], "kmean": 0, "cluster": 0, "algorithm": [0, 1], "group": 0, "object": 0, "k": [0, 1], "base": [0, 1, 2], "characterist": [0, 2], "The": [0, 1], "done": [0, 1], "minim": 0, "sum": [0, 1], "distanc": 0, "between": 0, "each": 0, "centroid": 0, "we": [0, 1], "show": [0, 1], "two": 0, "method": [0, 2], "full": 0, "aim": 0, "compar": 0, "tempor": [0, 2], "e": 0, "ar": [0, 1], "present": 0, "differ": [0, 1], "period": [0, 2], "time": [0, 1, 2], "condit": 0, "ani": [0, 1, 2], "map": [0, 2], "specif": 0, "one": [0, 1, 2], "other": 0, "For": [0, 1], "elimi": 0, "warn": [0, 1], "import": [0, 1], "ignor": 0, "all": [0, 1], "futur": [0, 2], "simplefilt": 0, "action": 0, "categori": 0, "futurewarn": 0, "filterwarn": 0, "contain": [0, 1], "function": [0, 1], "you": [0, 1], "need": [0, 1], "numpi": [0, 1], "np": [0, 1], "mne": [0, 1], "o": [0, 1], "matplotlib": [0, 1], "pyplot": [0, 1], "plt": [0, 1], "read_raw_fif": 0, "concatenate_raw": [0, 1], "read_raw_eeglab": 0, "copi": [0, 1], "scipi": [0, 1], "signal": 0, "viz": 0, "natsort": 0, "seaborn": [0, 1], "sn": [0, 1], "modkmean": 0, "preprocess": [0, 1], "extract_gfp_peak": 0, "dataset": [0, 1], "lemon": 0, "chdata": 0, "nk": 0, "defin": [0, 1, 2], "eo": 0, "ec": 0, "subject_id": [0, 1], "010020": 0, "010021": 0, "010022": 0, "010023": 0, "010024": 0, "comput": [0, 1], "combin": [0, 1, 2], "file": [0, 1], "individual_cluster_cent": 0, "list": [0, 1], "condition_id": 0, "load": [0, 1], "data": 0, "raw_fnam": [0, 1], "data_path": 0, "print": [0, 1], "subject": [0, 1], "str": [0, 1], "raw": [0, 1], "preload": [0, 1], "true": [0, 1], "standard": [0, 1], "pick": [0, 1], "eeg": 2, "crop": [0, 1], "0": [0, 1], "30": [0, 1], "speed": 0, "up": [0, 1], "set_eeg_refer": 0, "averag": 0, "extract": [0, 1], "gfp": 0, "peak": 0, "gfp_peak": 0, "level": 0, "modk": 0, "n_cluster": 0, "5": [0, 1], "random_st": [0, 1], "42": [0, 1], "fit": [0, 1], "n_job": [0, 1], "append": [0, 1], "cluster_centers_": 0, "read": [0, 1], "user": [0, 1], "tivadarr": [0, 1], "pycrostates_data": 0, "preprocessed_lemon": 0, "sub": 0, "010020_eo": 0, "fdt": 0, "104402": 0, "000": [0, 1], "417": 0, "608": 0, "sec": [0, 1], "creat": [0, 1], "rawarrai": 0, "float64": [0, 1], "n_channel": [0, 1], "61": 0, "n_time": [0, 1], "104403": 0, "rang": [0, 1], "readi": 0, "locat": 0, "channel": [0, 1], "unknown": 0, "consid": [0, 2], "call": [0, 1], "set_montag": [0, 1], "after": [0, 1], "ad": 0, "new": [0, 1], "refer": 0, "appli": 0, "montag": [0, 1], "onli": [0, 1], "set": [0, 1], "exist": 0, "interpol": [0, 1], "spline": 0, "bad": [0, 1], "automat": [0, 1], "origin": [0, 1], "head": 0, "radiu": 0, "95": 0, "8": [0, 1], "mm": 0, "matrix": [0, 1], "59": 0, "sensor": 0, "posit": 0, "type": [0, 1], "select": [0, 1], "re": 0, "referenc": 0, "custom": 0, "Then": 0, "individu": 0, "topographi": [0, 2], "concaten": [0, 1], "second": 0, "group_cluster_cent": 0, "vstack": 0, "t": [0, 1, 2], "info": [0, 1], "plot": [0, 1], "polar": 0, "can": [0, 1, 2], "invert": 0, "invert_polar": 0, "note": [0, 1], "affect": 0, "visual": [0, 1], "ha": 0, "effect": 0, "dure": [0, 1], "fals": [0, 1], "reorder_clust": 0, "order": [0, 1], "4": [0, 1, 2], "3": [0, 2], "rename_clust": 0, "new_nam": 0, "ms1": 0, "ms2": 0, "ms3": 0, "ms4": 0, "ms5": 0, "ms_data": 0, "segmentation_group": 0, "sake": 0, "segment": [0, 1, 2], "predict": [0, 1], "factor": 0, "10": [0, 1, 2], "half_window_s": 0, "d": [0, 2], "compute_paramet": 0, "data_ec": 0, "data_eo": 0, "gev_ec": 0, "ms1_gev": 0, "ms2_gev": 0, "ms3_gev": 0, "ms4_gev": 0, "ms5_gev": 0, "gev_eo": 0, "fig": [0, 1], "ax1": 0, "ax2": 0, "subplot": [0, 1], "ncol": 0, "figsiz": [0, 1], "name": [0, 1], "cluster_nam": 0, "violinplot": 0, "arrai": [0, 1], "set_xtick": 0, "tick": 0, "len": [0, 1], "label": [0, 1], "set_xlabel": 0, "ey": 0, "open": 0, "close": 0, "suptitl": [0, 1], "global": [0, 2], "explain": 0, "varianc": [0, 1, 2], "total_gev_eo": 0, "total_gev_ec": 0, "sum_eo": 0, "mean": [0, 1, 2], "axi": [0, 1], "sum_ec": 0, "total": 0, "5147167463252209": [], "5874373582710964": [], "mean_dur_ec": [], "ms1_meandur": [], "ms2_meandur": [], "ms3_meandur": [], "ms4_meandur": [], "ms5_meandur": [], "mean_dur_eo": [], "x1": [], "y1": [], "y2": [], "bar": [], "align": [], "center": [], "width": [], "durat": [], "": [0, 1], "individual_cluster_centers_eo": 0, "datanam": 0, "010021_eo": 0, "010022_eo": 0, "010023_eo": 0, "010024_eo": 0, "first": [0, 1], "group_cluster_centers_eo": 0, "store": 0, "without": 0, "spatial": 0, "compon": 0, "do": [0, 1], "modk_g_eo": 0, "individual_cluster_centers_ec": 0, "010020_ec": 0, "010021_ec": 0, "010022_ec": 0, "010023_ec": 0, "010024_ec": 0, "group_cluster_centers_ec": 0, "modk_g_ec": 0, "tmin": [0, 1], "tmax": [0, 1], "nice": [], "handi": [], "doe": [], "current": 2, "although": [], "cook": [], "allow": [], "u": 1, "determin": 1, "driven": [], "wai": [1, 2], "how": [1, 2], "right": 1, "number": [0, 1], "which": [0, 1], "someth": [], "data_al": 1, "sampling_r": 0, "sfreq": [0, 1], "n_optim": 0, "score": [0, 1], "microstates_findnumb": 0, "_fitted_data": 0, "n_max": 0, "optim": [0, 1], "7": [0, 1], "6": 0, "microstates_seg": 0, "n_microst": 0, "microstates_plot": [], "epoch": [], "500": [], "attributeerror": [], "traceback": [0, 1], "most": [0, 1], "recent": [0, 1], "last": [0, 1], "cell": [0, 1], "In": [0, 1], "24": [], "line": [0, 1], "anaconda3": [0, 1], "env": [0, 1], "lib": [0, 1], "python3": [0, 1], "12": [0, 1], "site": [0, 1], "py": [0, 1], "83": 0, "81": 0, "topomap": [], "82": 1, "enumer": [0, 1], "_": [0, 1], "plot_topomap": [], "ax": 1, "ch_type": 1, "84": 0, "set_titl": [], "f": [0, 1], "86": [], "87": 0, "get": [], "x": [0, 1], "1028": [], "po": [], "mask": [], "mask_param": [], "contour": [], "outlin": [], "sphere": [], "image_interp": [], "extrapol": [], "border": [], "size": 1, "cmap": [], "vlim": [], "cnorm": [], "onselect": [], "1023": [], "none": 1, "1024": [], "1025": [], "provid": [0, 1], "implicitli": [], "vmin": [], "1026": [], "vmax": [], "addit": [], "param": [], "1027": [], "return": 1, "_plot_topomap": [], "1029": [], "1030": [], "1031": [], "1032": [], "1033": [], "1034": [], "1035": [], "1036": [], "1037": [], "1038": [], "1039": [], "1040": [], "1041": [], "1042": [], "1043": [], "1044": [], "1045": [], "1046": [], "1047": [], "1048": [], "1049": [], "1050": [], "1253": [], "1246": [], "give": 1, "help": [], "error": 1, "messag": [], "common": [], "mistak": [], "regard": [], "1247": [], "1248": [], "pos_help": [], "1249": [], "electrod": [], "should": 1, "specifi": [], "2d": [], "1250": [], "shape": [0, 1], "row": [], "1251": [], "y": [0, 1], "1252": [], "ndim": [], "1254": [], "1255": [], "suppli": [], "where": 2, "1256": [], "wa": 1, "expect": [], "1257": [], "format": 1, "1258": [], "rais": [0, 1], "valueerror": 1, "nonetyp": [], "attribut": [], "11114267": [], "05553996": [], "17148415": [], "16096968": [], "0953579": [], "01086835": [], "04858861": [], "17973009": [], "10610762": [], "00714437": [], "08603789": [], "18339351": [], "1340436": [], "01692908": [], "13267581": [], "16035905": [], "1393878": [], "03448516": [], "10353464": [], "20605329": [], "09525259": [], "1222349": [], "05093714": [], "07544057": [], "19077802": [], "22925806": [], "05124791": [], "01530144": [], "10597372": [], "18640658": [], "12717142": [], "1357126": [], "1307655": [], "04229765": [], "00838001": [], "16651174": [], "12124959": [], "04791773": [], "00689438": [], "17887823": [], "15806243": [], "05441447": [], "10365594": [], "16566263": [], "07703022": [], "05444439": [], "1532675": [], "15892492": [], "10163605": [], "03745012": [], "17468025": [], "20186925": [], "08930911": [], "00802424": [], "14722997": [], "22879986": [], "06009322": [], "00401896": [], "11675682": [], "19620596": [], "22944539": [], "0965159": [], "14827106": [], "03021104": [], "06217756": [], "12777343": [], "18054447": [], "19866516": [], "02171773": [], "04084619": [], "12557246": [], "17955501": [], "09795451": [], "09840021": [], "01232644": [], "10929487": [], "16015297": [], "16866801": [], "12116029": [], "01229147": [], "07269864": [], "12970927": [], "19802561": [], "19427169": [], "12543091": [], "05540651": [], "03548085": [], "11832417": [], "17731057": [], "13488321": [], "07711629": [], "01929844": [], "05742904": [], "09943446": [], "16441071": [], "18204831": [], "03665832": [], "09064826": [], "15629891": [], "19210257": [], "02928446": [], "00433671": [], "15557049": [], "188581": [], "09957396": [], "04484275": [], "05201114": [], "1398632": [], "15470267": [], "15754529": [], "06982318": [], "02973004": [], "10377623": [], "21801046": [], "1822057": [], "07037178": [], "00266883": [], "22823159": [], "22890644": [], "17753962": [], "0960741": [], "02658884": [], "16253313": [], "16137338": [], "15853594": [], "14555511": [], "13179687": [], "13613928": [], "13937374": [], "12489345": [], "06192077": [], "04865436": [], "09811142": [], "09831646": [], "00308394": [], "04036081": [], "03276335": [], "06922832": [], "02317726": [], "12265387": [], "14809593": [], "0704503": [], "15752402": [], "0279121": [], "16608758": [], "22898318": [], "20750744": [], "05479224": [], "00158995": [], "10554463": [], "12911773": [], "11636965": [], "01325616": [], "15664178": [], "15722419": [], "15253461": [], "16390835": [], "1472472": [], "13065894": [], "13102346": [], "14654928": [], "13324198": [], "09109914": [], "06224171": [], "12142998": [], "06123192": [], "00657109": [], "04979213": [], "02178952": [], "040835": [], "08966164": [], "16216769": [], "13255508": [], "00311465": [], "09630465": [], "20656077": [], "22910885": [], "14745248": [], "09023774": [], "20829113": [], "21725447": [], "21053906": [], "10293597": [], "14669985": [], "1455273": [], "12650778": [], "14900173": [], "16941964": [], "15419896": [], "11909108": [], "099901": [], "12394003": [], "12610344": [], "089018": [], "0321642": [], "0355297": [], "06278431": [], "0207552": [], "00957389": [], "04572651": [], "03372345": [], "04140751": [], "07244876": [], "16768008": [], "11459975": [], "12320143": [], "11740823": [], "15239163": [], "15323353": [], "13095757": [], "19339342": [], "19468055": [], "20802031": [], "13569738": [], "13799526": [], "16181078": [], "16301825": [], "128088": [], "14362435": [], "16363049": [], "16416465": [], "14132841": [], "09639741": [], "11479031": [], "10418161": [], "06739479": [], "03334944": [], "05977496": [], "04275244": [], "01132379": [], "03730063": [], "04086975": [], "04181249": [], "06816524": [], "0658534": [], "12950282": [], "11921554": [], "1292625": [], "16200122": [], "19094734": [], "20198719": [], "19625049": [], "20011076": [], "21135179": [], "sequenc": 0, "gev": 0, "787028664773024": [], "gev_per_microst": [], "20739084": [], "1423387": [], "29227948": [], "14501964": [], "93862173": [], "9838683": [], "9559881": [], "94748262": [], "92177268": [], "9477159": [], "98051693": [], "9756164": [], "96018058": [], "9672285": [], "95003856": [], "96178144": [], "97893796": [], "96387653": [], "92643409": [], "94439185": [], "9988605": [], "94772963": [], "96602346": [], "94755622": [], "95036793": [], "94735151": [], "96287683": [], "9341312": [], "96282809": [], "96828943": [], "95280041": [], "92693744": [], "99691204": [], "96733528": [], "91520229": [], "90515338": [], "97173568": [], "96329495": [], "92973425": [], "96121967": [], "95570187": [], "95261374": [], "98903976": [], "96998278": [], "97014365": [], "94320267": [], "97348652": [], "95873895": [], "94951699": [], "89170384": [], "89721153": [], "95473295": [], "9396182": [], "info_algorithm": [], "clustering_funct": [], "functool": [], "partial": [], "_cluster_kmod": [], "0x13174c0e0": [], "max_iter": 0, "1000": [], "threshold": [], "1e": 1, "06": [], "4411": [], "clusters_norm": [], "residu": [], "0010249139181221223": [], "gev_kmod": [], "microstates_kmod": [], "convent": [], "gev_kmean": [], "100": [], "2f": [], "modifi": [], "microstates_stat": [], "microstates_dynam": [], "microstates_complex": [], "thi": [0, 1, 2], "i": [0, 1, 2], "jupyt": 2, "book": 2, "illustr": [0, 2], "microst": 1, "analysi": [], "us": [0, 1, 2], "pycrost": [0, 2], "neurokit2": [0, 2], "packag": [0, 1, 2], "script": 0, "an": [0, 1], "dynam": 2, "oscillatori": 2, "system": [1, 2], "describ": 2, "term": 2, "its": 2, "state": [0, 2], "variabl": [1, 2], "characteris": 2, "given": 2, "chang": [1, 2], "over": [1, 2], "One": [1, 2], "studi": 2, "find": 2, "momentari": 2, "certain": 2, "interest": 2, "seri": 2, "stabl": 2, "quasi": 2, "thei": 2, "repres": 2, "brain": [1, 2], "point": [1, 2], "compris": 2, "mani": 2, "local": 2, "continu": 2, "longer": 2, "small": 2, "disappear": 2, "quit": 2, "rapidli": 2, "case": [1, 2], "focus": 2, "attent": 2, "distract": 2, "wake": 2, "sleep": 2, "These": [1, 2], "associ": 2, "electr": 2, "field": 2, "scalp": 2, "measur": 2, "independ": [], "That": [], "even": [], "choos": 1, "anoth": 1, "cf": [], "figur": [0, 1], "1": [], "brunet": [], "murrai": [], "michel": [0, 2], "2011": [], "multivari": [], "analys": [], "topograph": [], "more": [], "gener": 1, "take": 1, "better": [], "advantag": 1, "inform": 1, "high": 1, "densiti": [], "while": 1, "also": [], "retain": [], "statist": 1, "rigor": [], "third": [], "direct": 2, "neurophysiolog": [], "interpret": [], "physic": [], "law": [], "dictat": [], "indic": 0, "configur": [], "activ": 1, "cerebr": [], "sourc": [], "convers": [], "g": [], "fender": [], "1987": 2, "lehmann": 2, "vaughan": [], "1982": [], "formul": 1, "strength": [], "due": 1, "disentangl": [], "treat": [], "practic": [], "consequ": [], "research": [], "strong": [], "priori": [], "hypothes": [], "relev": [], "process": [], "readili": [], "limit": [], "gain": [], "absent": [], "tradit": [], "voltag": [], "waveform": [], "googl": 0, "command": 0, "below": [0, 1], "pip": 0, "instal": 0, "25": [], "bibliographi": [], "bib": [], "exercis": 1, "filter": 1, "docnam": [], "myref": [], "kplmf15": 2, "arjun": 2, "khanna": 2, "alvaro": 2, "pascual": 2, "leon": 2, "christoph": 2, "m": [0, 2], "faranak": 2, "farzan": 2, "rest": 2, "statu": 2, "neurosci": 2, "biobehavior": 2, "review": 2, "49": [0, 2], "105": 2, "113": 2, "2015": 2, "lopal87": 2, "dietrich": 2, "hisaki": 2, "ozaki": 2, "ivan": 2, "p": [1, 2], "\u00e1": 2, "l": [1, 2], "alpha": [1, 2], "micro": 2, "space": [1, 2], "orient": 2, "electroencephalographi": 2, "clinic": 2, "neurophysiologi": 2, "67": [0, 2], "271": [0, 2], "288": 2, "lpmm09": 2, "roberto": 2, "marqui": 2, "scholarpedia": 2, "7632": 2, "2009": 2, "et": 2, "al": [1, 2], "As": [0, 1], "comparison": 0, "here": [0, 1], "result": [0, 1], "found": [0, 1], "team": 0, "when": [0, 1], "taken": 0, "koenig": [0, 2], "2018": [0, 2], "ipython": [0, 1], "displai": 0, "imag": 0, "microstate_result": 0, "jpg": 0, "26": 1, "mk18": 2, "thoma": 2, "tool": 2, "whole": 2, "neuron": 2, "network": 2, "neuroimag": 2, "180": 2, "577": 2, "593": 2, "connect": 2, "url": 2, "www": 2, "sciencedirect": 2, "com": 2, "scienc": 2, "articl": 2, "pii": 2, "s105381191731008x": 2, "doi": 2, "org": 2, "1016": 2, "j": 2, "2017": 2, "11": 2, "062": 2, "some": [0, 1], "tk": 0, "panda": 0, "pd": 0, "fname_": 0, "ms_group_segmentation_param": 0, "csv": 0, "df": 0, "datafram": 0, "from_dict": 0, "to_csv": 0, "index": [0, 1], "header": 0, "6182177874406081": 0, "7104392145808076": 0, "modk_eo": 0, "inlin": [0, 1], "linalgerror": 0, "19": 0, "get_ipython": 0, "run_line_mag": 0, "clustering_method": 0, "verbos": [0, 1], "kwarg": [0, 1], "80": 0, "idx": 0, "progress_bar": 0, "out": 0, "85": 0, "88": 0, "rez": 0, "256": [0, 1], "train": [0, 1], "gfp_method": 0, "standardize_eeg": 0, "n_run": 0, "criterion": 0, "251": 0, "gev_al": 0, "_microstates_segment_runsegment": 0, "252": 0, "253": 0, "255": [0, 1], "reorder": 0, "microstates_classifi": 0, "258": 0, "qualiti": 0, "259": 0, "cluster_qu": 0, "n_random": 0, "sd": 0, "260": 0, "261": 0, "output": 0, "262": 0, "263": 0, "264": 0, "270": 0, "info_mn": 0, "46": 0, "sort": 0, "experiment": 0, "9": [0, 1], "pattern": [0, 1], "valu": [0, 1], "vector": [0, 1], "43": 0, "44": 0, "45": [0, 1], "new_ord": 0, "_microstates_sort": 0, "47": 0, "replac": 0, "dict": [0, 1], "68": 0, "66": 0, "order_origin": 0, "coefs_linear": 0, "coefs_quadrat": 0, "polyfit": 0, "69": 0, "arang": [0, 1], "70": 0, "72": 0, "biggest": 0, "trend": 0, "linear": [0, 1], "quadrat": 0, "73": 0, "order_quad": 0, "ab": 0, "polynomi": 0, "669": 0, "deg": 0, "rcond": 0, "w": 0, "cov": 0, "667": 0, "scale": [0, 1], "nx": 0, "sqrt": 0, "lh": 0, "668": 0, "c": [0, 1], "resid": 0, "rank": [0, 1], "lstsq": 0, "rh": 0, "670": 0, "broadcast": 0, "coeffici": 0, "672": 0, "reduct": 0, "ill": 0, "linalg": 0, "2326": 0, "b": [0, 1], "2323": 0, "n_rh": 0, "2324": 0, "lapack": 0, "handl": [0, 1], "so": [0, 1], "alloc": 0, "larger": [0, 1], "2325": 0, "zero": [0, 1], "dtype": 0, "gufunc": 0, "signatur": 0, "extobj": 0, "2327": 0, "2328": 0, "124": [0, 1], "_raise_linalgerror_lstsq": 0, "err": 0, "flag": 0, "123": 0, "def": [0, 1], "svd": [0, 1], "did": 0, "converg": 0, "least": 0, "squar": 0, "ms_no": 0, "group_eo": 0, "modk_ec": 0, "zip": 0, "fname": 0, "path": [0, 1], "ms_topographies_eo_param": 0, "ms_topographies_ec": 0, "eo_param": 0, "microstate_id": 0, "channel_data": 0, "newlin": 0, "writer": 0, "writerow": 0, "group_ec": 0, "sklearn": 1, "discriminant_analysi": 1, "lineardiscriminantanalysi": 1, "model_select": 1, "shufflesplit": 1, "cross_val_scor": 1, "pipelin": 1, "events_from_annot": 1, "pick_typ": 1, "make_standard_montag": 1, "eegbci": 1, "csp": 1, "read_raw_edf": 1, "__doc__": 1, "paramet": 1, "avoid": 1, "evok": 1, "respons": 1, "start": 1, "cue": 1, "onset": 1, "event_id": 1, "feet": 1, "run": 1, "14": 1, "motor": 1, "load_data": 1, "standard_1005": 1, "band": 1, "pass": 1, "fir_design": 1, "firwin": 1, "skip_by_annot": 1, "edg": 1, "t1": 1, "t2": 1, "meg": 1, "stim": 1, "eog": 1, "exclud": 1, "test": 1, "classifi": 1, "proj": 1, "baselin": 1, "epochs_train": 1, "modul": 1, "interact": 1, "environ": 1, "edf": 1, "eegmmidb": 1, "s001": 1, "s001r06": 1, "detect": 1, "structur": 1, "19999": 1, "994": 1, "s001r10": 1, "s001r14": 1, "contigu": 1, "hz": 1, "fir": 1, "design": 1, "phase": 1, "non": 1, "causal": 1, "bandpass": 1, "window": 1, "domain": 1, "ham": 1, "0194": 1, "passband": 1, "rippl": 1, "53": 1, "db": 1, "stopband": 1, "attenu": 1, "lower": 1, "00": 1, "transit": 1, "bandwidth": 1, "cutoff": 1, "frequenc": 1, "upper": 1, "50": 1, "33": 1, "75": 1, "length": 1, "265": 1, "sampl": 1, "656": 1, "annot": 1, "descript": 1, "Not": 1, "metadata": 1, "match": 1, "No": 1, "correct": 1, "project": 1, "item": 1, "801": 1, "parallel": 1, "17": 1, "elaps": 1, "drop": 1, "mont": 1, "carlo": 1, "cross": 1, "valid": 1, "reduc": 1, "epochs_data": 1, "get_data": 1, "epochs_data_train": 1, "cv": 1, "test_siz": 1, "cv_split": 1, "split": 1, "assembl": 1, "lda": 1, "n_compon": 1, "reg": 1, "log": 1, "norm_trac": 1, "scikit": 1, "clf": 1, "class_bal": 1, "max": 1, "accuraci": 1, "chanc": 1, "estim": 1, "fit_transform": 1, "plot_pattern": 1, "unit": 1, "au": 1, "toler": 1, "7e": 1, "05": 1, "2e": 1, "16": 1, "ep": 1, "64": 1, "dim": 1, "8e": 1, "09": 1, "singular": 1, "mag": 1, "projector": 1, "covari": 1, "empir": 1, "0001": 1, "3e": 1, "5e": 1, "00012": 1, "6e": 1, "00011": 1, "933333": 1, "533333": 1, "00025": 1, "00026": 1, "9e": 1, "w_length": 1, "int": 1, "w_step": 1, "step": 1, "w_start": 1, "scores_window": 1, "train_idx": 1, "test_idx": 1, "y_train": 1, "y_test": 1, "x_train": 1, "x_test": 1, "transform": 1, "slide": 1, "score_this_window": 1, "n": 1, "w_time": 1, "axvlin": 1, "linestyl": 1, "color": 1, "axhlin": 1, "xlabel": 1, "ylabel": 1, "titl": 1, "legend": 1, "loc": 1, "neuro": 1, "inf": 1, "unib": 1, "ch": 1, "algorithmsneurosci": 1, "tutorial_fil": 1, "ml": 1, "html": 1, "come": 1, "numer": 1, "possibl": 1, "whether": 1, "singl": 1, "commonli": 1, "support": 1, "discrimin": 1, "logist": 1, "regress": 1, "emploi": 1, "demonstr": 1, "simpl": 1, "class": 1, "same": 1, "previou": 1, "paricip": 1, "examin": 1, "stimuli": 1, "howev": 1, "agnost": 1, "It": 1, "just": 1, "somewher": 1, "were": 1, "differenti": 1, "check": 1, "go": 1, "further": 1, "ask": 1, "question": 1, "resposn": 1, "To": 1, "answer": 1, "instanc": 1, "evalu": 1, "perform": 1, "model": 1, "construct": 1, "make_pipelin": 1, "librari": 1, "execut": 1, "befor": 1, "purpos": 1, "convert": 1, "n_epoch": 1, "form": 1, "moreov": 1, "standardscal": 1, "remov": 1, "our": 1, "featur": 1, "wise": 1, "z": 1, "formula": 1, "deviat": 1, "By": 1, "techniqu": 1, "becom": 1, "respect": 1, "prevent": 1, "domin": 1, "becuas": 1, "variat": 1, "final": 1, "slidingestim": 1, "option": 1, "have": 1, "made": 1, "silenc": 1, "arg": 1, "cross_val_multiscor": 1, "isfil": 1, "join": 1, "listdir": 1, "train_test_split": 1, "gridsearchcv": 1, "stratifiedkfold": 1, "metric": 1, "precision_recall_fscore_support": 1, "accuracy_scor": 1, "svm": 1, "linear_model": 1, "logisticregress": 1, "prepar": 1, "syntaxerror": 1, "invalid": 1, "syntax": 1, "epochs_al": 1, "labels_al": 1, "id": 1, "s002": 1, "s002r06": 1, "19679": 1, "122": 1, "s002r10": 1, "s002r14": 1, "s003": 1, "s003r06": 1, "s003r10": 1, "s003r14": 1, "s004": 1, "s004r06": 1, "s004r10": 1, "s004r14": 1, "s005": 1, "s005r06": 1, "s005r10": 1, "s005r14": 1, "s006": 1, "s006r06": 1, "s006r10": 1, "s006r14": 1, "s007": 1, "s007r06": 1, "s007r10": 1, "s007r14": 1, "s008": 1, "s008r06": 1, "s008r10": 1, "s008r14": 1, "fold": 1, "applic": 1, "hyperparamet": 1, "advanc": 1, "what": 1, "usual": 1, "theori": 1, "majorli": 1, "improv": 1, "manual": 1, "end": 1, "issu": 1, "overfit": 1, "would": 1, "smaller": 1, "mai": 1, "being": 1, "real": 1, "therefor": 1, "good": 1, "problem": 1, "solut": 1, "approach": 1, "devid": 1, "equal": 1, "trial": 1, "hypeparamet": 1, "instead": 1, "chunck": 1, "applycrossvalid": 1, "cv_score_tim": 1, "sl": 1, "isfinit": 1, "isnan": 1, "plotcvscor": 1, "els": 1, "input": 1, "nan": 1, "infin": 1, "cv_score_time_img": 1, "solver": 1, "53333333": 1, "nameerror": 1, "23": 1, "21": 1, "averagecvscor": 1, "avg_cv_scor": 1, "avg_scores_tmp": 1, "sum_col_wis": 1, "avg_cv_score_tim": 1, "follow": 1, "pylab": 1, "stat": 1, "ttest_rel": 1, "sem": 1, "plot_condit": 1, "style": 1, "white": 1, "colorsl": 1, "228": 1, "28": 1, "55": 1, "126": 1, "184": 1, "77": 1, "175": 1, "74": 1, "152": 1, "78": 1, "163": 1, "127": 1, "col_ax": 1, "num": 1, "dpi": 1, "150": 1, "epochs_mean": 1, "epochs_std": 1, "linewidth": 1, "fill_between": 1, "abov": 1, "achiv": 1, "asarrai": 1, "numberofepoch": 1, "epochs_all_un": 1, "read_epoch": 1, "epochs_un": 1, "fu": 1, "fn": 1, "epochs_up": 1, "fp": 1, "epochs_np": 1, "un": 1, "epochs_all_up": 1, "epochs_all_np": 1, "cv_score": 1, "48888888888888893": 1, "46666667": 1, "73333333": 1, "562962962962963": 1, "33333333": 1, "13333333": 1, "5000000000000001": 1, "488888888888889": 1, "66666667": 1, "49523809523809526": 1, "26666667": 1, "48611111111111116": 1, "requir": 1, "clf_gr": 1, "sl_gr": 1, "cv_score_time_group": 1, "29": 1, "decor": 1, "gen": 1, "fit_param": 1, "pre_dispatch": 1, "377": 1, "373": 1, "util": 1, "375": 1, "check_scor": 1, "_get_check_scor": 1, "379": 1, "check_cv": 1, "is_classifi": 1, "380": 1, "cv_iter": 1, "514": 1, "iter": 1, "484": 1, "make": 1, "485": 1, "486": 1, "consist": 1, "through": 1, "ensur": 1, "everyth": 1, "510": 1, "3x1": 1, "spars": 1, "511": 1, "513": 1, "_make_index": 1, "check_consistent_length": 1, "515": 1, "457": 1, "455": 1, "uniqu": 1, "456": 1, "458": 1, "inconsist": 1, "r": 1, "459": 1, "460": 1, "data_fold": 1, "study1": 1, "study1_eeg": 1, "epochdata": 1, "ds_store": 1, "folow": 1, "getdata_label": 1, "tmp_epoch": 1, "tmp_label": 1, "extend": 1, "tmp_id": 1, "build": 1, "plu": 1, "minu": 1, "infinit": 1, "becaus": 1, "python": 1, "cannot": 1, "those": 1, "If": 1, "inifinit": 1, "detedt": 1, "your": 1, "move": 1, "next": 1, "occur": 1, "still": 1, "claim": 1, "opposit": 1, "reason": 1, "higher": 1, "precis": 1, "than": 1, "float32": 1, "depend": 1, "prefer": 1, "begin": 1, "fix": 1, "cast": 1, "data_un": 1, "labels_un": 1, "ids_un": 1, "hyper": 1, "constraint": 1, "left": 1, "clf_un": 1, "sl_un": 1, "data_np": 1, "labels_np": 1, "ids_np": 1, "clf_np": 1, "sl_np": 1, "three": 1, "less": 1, "contrast": 1, "higer": 1, "conclud": 1, "lead": 1, "poor": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"thi": [], "script": [], "i": [], "an": [], "illustr": [], "run": [], "microst": [0, 2], "analysi": [0, 1, 2], "us": [], "pycrost": [], "neurokit2": [], "packag": [], "option": 0, "nr": 0, "1": [0, 1], "backfit": 0, "2": [0, 1], "neurokit": [], "some": [], "fanci": [], "applic": [], "eeg": [0, 1], "introduct": 2, "what": 2, "ar": 2, "tutori": 1, "6": 1, "appli": 1, "machin": 1, "learn": 1, "method": 1, "tempor": 1, "dimens": 1, "data": 1, "each": 1, "particip": 1, "separ": 1, "classif": 1, "between": 1, "hand": 1, "foot": 1, "mental": 1, "imageri": 1, "decod": 1, "full": 1, "epoch": 1, "group": 1, "level": 1, "task": 1, "unpleas": 1, "pleasant": 1, "event": 1, "neutral": 1, "3": 1}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"EEG microstate analysis": [[0, "eeg-microstate-analysis"]], "Option nr 1": [[0, "option-nr-1"]], "backfitting": [[0, "backfitting"]], "Option nr 2": [[0, "option-nr-2"]], "Tutorial #6: Applying Machine Learning Methods to Temporal Dimensions of EEG Data": [[1, "tutorial-6-applying-machine-learning-methods-to-temporal-dimensions-of-eeg-data"]], "Analysis on temporal dimensions for each participant separately": [[1, "analysis-on-temporal-dimensions-for-each-participant-separately"]], "Classification Between hand and foot mental imagery": [[1, "classification-between-hand-and-foot-mental-imagery"]], "Decode the full epoch": [[1, "decode-the-full-epoch"]], "Group-Level Analysis on Temporal Dimension": [[1, "group-level-analysis-on-temporal-dimension"]], "Task #1: Classification of Unpleasant and Pleasant Events": [[1, "task-1-classification-of-unpleasant-and-pleasant-events"]], "Task #2: Classification of Unpleasant and Neutral Events": [[1, "task-2-classification-of-unpleasant-and-neutral-events"]], "Task #3: Classification of Neutral and Pleasant Events": [[1, "task-3-classification-of-neutral-and-pleasant-events"]], "Introduction to Microstates Analysis": [[2, "introduction-to-microstates-analysis"]], "What are microstates": [[2, "what-are-microstates"]]}, "indexentries": {}})