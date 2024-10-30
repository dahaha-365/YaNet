const listExtractor = function (content: string) {
    return content.split('\n').filter(line => {
        return /^[*.+a-z0-9][.a-z0-9-]+$/i.test(line)
    })
}

const classicalExtractor = function (content: string) {
    return content.split('\n').filter(line => {
        return /^(DOMAIN|DOMAIN-SUFFIX|DOMAIN-KEYWORD|DOMAIN-REGEX|GEOSITE|IP-CIDR|IP-CIDR6|IP-SUFFIX|IP-ASN|GEOIP|SRC-GEOIP|SRC-IP-ASN|SRC-IP-CIDR|SRC-IP-SUFFIX|DST-PORT|SRC-PORT|IN-PORT|IN-TYPE|IN-USER|IN-NAME|PROCESS-PATH|PROCESS-PATH-REGEX|PROCESS-NAME|PROCESS-NAME-REGEX|UID|NETWORK|DSCP|AND|OR|NOT)[,.-a-z0-9]+$/i.test(line)
    })
}

const singJsonExtrator = function (content: string) {
    const json = JSON.parse(content)
    let rules: string[] = []
    for (const type in json.rules[0]) {
        if (typeof(json.rules[0][type]) == 'string') {
            json.rules[0][type] = [json.rules[0][type]]
        }
        switch (type) {
            case 'domain': {
                const new_rules = json.rules[0][type].map((domain: string) => 'DOMAIN,' + domain)
                rules = rules.concat(new_rules)
                break
            }
            case 'domain_suffix': {
                const new_rules = json.rules[0][type].map((domain: string) => 'DOMAIN-SUFFIX,' + domain)
                rules = rules.concat(new_rules)
                break
            }
            case 'domain_regex': {
                const new_rules = json.rules[0][type].map((domain: string) => 'DOMAIN-REGEX,' + domain)
                rules = rules.concat(new_rules)
                break
            }
            case 'domain_keyword': {
                const new_rules = json.rules[0][type].map((domain: string) => 'DOMAIN-KEYWORD,' + domain)
                rules = rules.concat(new_rules)
                break
            }
        }
    }
    return rules
}

export { listExtractor, classicalExtractor, singJsonExtrator }
