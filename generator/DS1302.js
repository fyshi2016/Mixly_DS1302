//初始化时钟管脚
Blockly.Arduino.DS1302_init = function() {
    var dropdown_rst = Blockly.Arduino.valueToCode(this, 'RST', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_dat = Blockly.Arduino.valueToCode(this, 'DAT', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_clk = Blockly.Arduino.valueToCode(this, 'CLK', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['define_DS1302'] = '#include <DS1302.h>';
    Blockly.Arduino.definitions_['define_origin'] = 'DS1302 rtc(' + dropdown_rst + ',' + dropdown_dat + ',' + dropdown_clk + ');';
    return "";
};

//设置时间
Blockly.Arduino.DS1302_set_date = function() {
    var number_year = Blockly.Arduino.valueToCode(this, 'YEAR', Blockly.Arduino.ORDER_ATOMIC);
    var number_month = Blockly.Arduino.valueToCode(this, 'MONTH', Blockly.Arduino.ORDER_ATOMIC);
    var number_day = Blockly.Arduino.valueToCode(this, 'DAY', Blockly.Arduino.ORDER_ATOMIC);
    var number_hour = Blockly.Arduino.valueToCode(this, 'HOUR', Blockly.Arduino.ORDER_ATOMIC);
    var number_minute = Blockly.Arduino.valueToCode(this, 'MINUTE', Blockly.Arduino.ORDER_ATOMIC);
    var number_second = Blockly.Arduino.valueToCode(this, 'SECOND', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_set_init_start'] = ' rtc.halt(false);\n' + ' rtc.writeProtect(false);\n' + ' //rtc.setDOW(SATURDAY);        // 设置星期\n';
    Blockly.Arduino.setups_['setup_set_time'] = ' rtc.setTime(' + number_hour + ', ' + number_minute + ', ' + number_second + ');   // 设置时间\n';
    Blockly.Arduino.setups_['setup_set_date'] = ' rtc.setDate(' + number_year + ', ' + number_month + ', ' + number_day + ');   // 设置日期2013年11月9日\n';
    Blockly.Arduino.setups_['setup_set_init_end'] = 'rtc.writeProtect(true);\n';
    return "";
};

//获取日期
Blockly.Arduino.DS1302_get_date = function() {
    var code = 'rtc.getDateStr(FORMAT_LONG,FORMAT_BIGENDIAN, \'-\')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取时间
Blockly.Arduino.DS1302_get_time = function() {
    var code = 'rtc.getTimeStr()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
