import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList } from 'react-native';

interface DataItem {
  id: number
  value: string
}

interface SelectInputProps {
  data: DataItem[]
  onSelect: Function
}

export function SelectInput({ data, onSelect }: SelectInputProps) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('');

  const handleSelect = (item: DataItem) => {
    setSelected(item.value);
    setVisible(false);
    if (onSelect) onSelect(item.value);
  };

  return (
    <View>
      <TouchableOpacity style={styles.input} onPress={() => setVisible(true)}>
        <Text style={styles.inputText}>{selected || 'Selecione uma opção'}</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)} style={styles.option}>
                  <Text style={styles.optionText}>{item.value}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  inputText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    maxHeight: '60%',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
});

