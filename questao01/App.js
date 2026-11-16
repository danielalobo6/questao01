import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  const calcularHidratacao = () => {
    setErro('');
    setResultado('');

    const pesoNum = parseFloat(peso.replace(',', '.'));

    if (isNaN(pesoNum) || pesoNum <= 0) {
      setErro('Por favor, informe um peso válido e maior que zero.');
      return;
    }

    const consumoLitros = (pesoNum * 35) / 1000;
    setResultado(`${consumoLitros.toFixed(2)} litros por dia.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Hidratação</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Informe seu peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Button title="Calcular" onPress={calcularHidratacao} />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  resultado: { marginTop: 15, fontSize: 16, fontWeight: 'bold', color: 'green', textAlign: 'center' },
  erro: { marginTop: 15, fontSize: 14, color: 'red', textAlign: 'center' },
});