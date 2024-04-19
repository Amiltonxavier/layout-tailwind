const CONTINENT = {
    "Africa": [
        "Algeria",
        "Egypt",
        "Libya",
        "Morocco",
        "Sudan",
        "Tunisia",
        "Benin",
        "Burkina Faso",
        "Cape Verde",
        "Gambia",
        "Ghana",
        "Guinea",
        "Guinea-Bissau",
        "Ivory Coast",
        "Liberia",
        "Mali",
        "Mauritania",
        "Niger",
        "Nigeria",
        "Senegal",
        "Sierra Leone",
        "Togo",
        "Angola",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "Congo",
        "Democratic Republic of the Congo",
        "Equatorial Guinea",
        "Gabon",
        "Sao Tome and Principe",
        "Burundi",
        "Comoros",
        "Djibouti",
        "Eritrea",
        "Ethiopia",
        "Kenya",
        "Madagascar",
        "Malawi",
        "Mauritius",
        "Mozambique",
        "Rwanda",
        "Seychelles",
        "Somalia",
        "South Sudan",
        "Tanzania",
        "Uganda",
        "Botswana",
        "Eswatini",
        "Lesotho",
        "Namibia",
        "South Africa",
        "Zambia",
        "Zimbabwe",
    ],
    "Europe": [
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kazakhstan",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "Netherlands",
        "North Macedonia",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom",
        "Vatican City",
    ]

}

const TIMEZONES = [
    "(UTC-12:00) Baker Island Time",
    "(UTC-11:00) Niue Time, Samoa Standard Time",
    "(UTC-10:00) Hawaii-Aleutian Standard Time, Cook Island Time",
    "(UTC-09:00) Alaska Standard Time, Gambier Island Time",
    "(UTC-08:00) Pacific Standard Time, Pacific Daylight Time",
    "(UTC-07:00) Mountain Standard Time, Mountain Daylight Time",
    "(UTC-06:00) Central Standard Time, Central Daylight Time",
    "(UTC-05:00) Eastern Standard Time, Eastern Daylight Time",
    "(UTC-04:00) Atlantic Standard Time, Atlantic Daylight Time",
    "(UTC-03:00) Argentina Time, Brasilia Time, Atlantic Daylight Time",
    "(UTC-02:00) Fernando de Noronha Time, South Georgia Time",
    "(UTC-01:00) Azores Time, Cape Verde Time",
    "(UTC) Greenwich Mean Time, Western European Time",
    "(UTC+01:00) Central European Time, West Africa Time",
    "(UTC+02:00) Eastern European Time, Central Africa Time",
    "(UTC+03:00) Moscow Standard Time, East Africa Time",
    "(UTC+04:00) Gulf Standard Time, Samara Time",
    "(UTC+05:00) Pakistan Standard Time, Yekaterinburg Time",
    "(UTC+06:00) Bangladesh Standard Time, Bhutan Time, Omsk Time",
    "(UTC+07:00) Indochina Time, Western Indonesia Time",
    "(UTC+08:00) China Standard Time, Singapore Standard Time, Australian Western Standard Time",
    "(UTC+09:00) Japan Standard Time, Korea Standard Time, Yakutsk Time",
    "(UTC+10:00) Australian Eastern Standard Time, Vladivostok Time",
    "(UTC+11:00) Norfolk Island Time, Solomon Island Time, Magadan Time",
    "(UTC+12:00) New Zealand Standard Time, Fiji Time, Kamchatka Time"
];



const TABSLIST = [
  {
    label: "Details",
    values: 1
  },
  {
    label: "Profile",
    values: 2
  },
  {
    label: "Password",
    values: 3
  },
  {
    label: "Team",
    values: 4
  },
  {
    label: "Plan",
    values: 5
  }
]


export const CONSTANTS = {
    CONTINENT,
    TIMEZONES,
    TABSLIST,
}