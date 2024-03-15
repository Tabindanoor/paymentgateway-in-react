// src/polyfills.js
import 'process/browser';
import crypto from 'crypto-browserify';
import stream from 'stream-browserify';
import url from 'url/';
import buffer from 'buffer/';
import util from 'util/';
import path from 'path-browserify';
import querystring from 'querystring-es3';
import https from 'https-browserify';
import http from 'stream-http';
import zlib from 'browserify-zlib';

global.process = process;
global.Buffer = buffer.Buffer;
global.process.browser = true;

window.crypto = crypto;
window.stream = stream;
window.URL = url.URL;
window.URLSearchParams = url.URLSearchParams;
window.buffer = buffer;
window.util = util;
window.path = path;
window.querystring = querystring;
window.https = https;
window.http = http;
window.zlib = zlib;