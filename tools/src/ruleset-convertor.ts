export default {
    domain2classical: (rule: string) => {
        if (/^[+.].+$/i.test(rule)) {
            rule = rule.replace('+.', 'DOMAIN-SUFFIX,')
        } else if (/^[*.].+$/i.test(rule)) {
            rule = rule.replace('*.', 'DOMAIN-SUFFIX,')
        } else if (/^[.].+$/i.test(rule)) {
            rule = rule.replace('.', 'DOMAIN-SUFFIX,')
        } else {
            rule = 'DOMAIN,' + rule
        }
        return rule
    }
}
