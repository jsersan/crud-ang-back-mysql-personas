"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var persona_routes_1 = __importDefault(require("../routes/persona.routes"));
var connection_1 = __importDefault(require("../db/connection"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Aplicacion corriendo por el puerto ', _this.port);
        });
    };
    Server.prototype.middlewares = function () {
        // Configuración específica de CORS para permitir Angular local
        this.app.use((0, cors_1.default)({
        origin: [
            'http://localhost:4200',  // Para desarrollo local
            'http://txemaserrano.com',  // Tu frontend real
            'https://crud-ang-back-mysql-personas.onrender.com'  // Si usas este también
        ],
        credentials: true
}));
        // Parseo del body
        this.app.use(express_1.default.json());
    };
    Server.prototype.routes = function () {
        // Registrar la ruta base
        this.app.use('/api/personas', persona_routes_1.default);
    };
    Server.prototype.conectarDB = function () {
        connection_1.default.connect(function (err) {
            if (err)
                throw err;
            console.log('Conectado a la base de datos');
        });
    };
    return Server;
}());
exports.default = Server;
