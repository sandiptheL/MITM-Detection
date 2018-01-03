var sslCertificate = require('get-ssl-certificate');

exports.handler = (event, context, callback) => {

    const remoteUrl=event ;

    sslCertificate.get(remoteUrl)
                .then(function(certificate) {

                certificate.success = true;

                certificate.message = `Found certificate for ${remoteUrl}`;

                const plaintext = JSON.stringify(certificate);
               callback(null, plaintext);
            }).catch(function(reason){

                const plaintext = JSON.stringify({
                    success: false,
                    message: `Unable to find certificate for ${remoteUrl}`
                });

                callback(null, plaintext);
            });

};

