import React from "react"
import { InputLabel, MenuItem, Select, FormControl } from "@material-ui/core"
import theme from "./theme"
import Platform from "../pages/platform"
import {
  useIntl,
  FormattedMessage,
  IntlContextConsumer,
  changeLocale,
} from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  es: "Español",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `yellow` : `white`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
