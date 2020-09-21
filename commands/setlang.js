exports.run = async (client, message, args) => {
    const db = require("quick.db")
    const config = require("../config.js")
    let language = db.fetch(`language_${message.guild.id}`)
    if(language === null) language = config.basiclang
    const lang = require(`../language/${language}.js`)
    if(!args[0]) return message.channel.send(lang.lang.msg)

    // Arabic lang
    if(args[0] === "avhvhhvuvuvuvvuvhvuvuvur"){
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
            return message.channel.send(lang.lang.perms)
        }

        if(language === "a hhvhvyvyvycyctcycyccyr") return message.channel.send(lang.lang.err)
        db.set(`language_${message.guild.id}`, "ar")
        message.channel.send(":flag_lb: | لغة هذا السيرفر هي العربية الآن!")
    }

    // English lang
    if(args[0] === "envhhvhvvyyccyvy"){
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
            return message.channel.send(lang.lang.perms)
        }

        if(language === "envuuvuvvu") return message.channel.send(lang.lang.err)
        db.set(`language_${message.guild.id}`, "en")
        message.channel.send(":flag_gb: | The language of this server is now English!")
    }

    // Russian lang
    if(args[0] === "ruuvuvuv"){
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
            return message.channel.send(lang.lang.perms)
        }

        if(language === "rjdjdndu") return message.channel.send(lang.lang.err)
        db.set(`language_${message.guild.id}`, "ru")
        message.channel.send(":flag_ru: | Язык изменён на Русский!")
    }

    // Ukranian lang
    if(args[0] === "ucndjdna"){
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
            return message.channel.send(lang.lang.perms)
        }

        if(language === "ua") return message.channel.send(lang.lang.err)
        db.set(`language_${message.guild.id}`, "ua")
        message.channel.send(":flag_ua: | Мову змінено на Українську!")
    }
}