import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import calculator, {initialState} from "./src/components/Calculator";
import Display from "./src/components/Display";

// create class component of App
export default class App extends React.Component {
 
  state = initialState;

  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };
  
    render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          {/* Display */}
          <Display value={this.state.currentValue} expression={this.state.expression} memoryValue={this.state.memoryValue} memoryExists={this.state.memoryExists}/> 
          <View style={styles.div}>
          
          <Button 
          value="MC" 
          theme="memory"
          handlePress={() => this.HandleTap("MC")} 
          />

            <Button
              value="MR"
              theme="memory"
              handlePress={() => this.HandleTap("MR")}
            />

            <Button
              value="M+"
              theme="memory"
              handlePress={() => this.HandleTap("M+")}
            />

            <Button
              value="M-"
              theme="memory"
              handlePress={() => this.HandleTap("M-")}
            />
          </View>

          {/* Clear */}
          <View style={styles.div}>
            <Button
              value="C"
              theme="secondary"
              handlePress={() => this.HandleTap("clear")}
            />

            <Button
              value="+/-"
              theme="secondary"
              handlePress={() => this.HandleTap("posneg")}
            />

            <Button
              value="%"
              theme="secondary"
              handlePress={() => this.HandleTap("operator","%")}
            />

            <Button
              value="/"
              theme="secondary"
              handlePress={() => this.HandleTap("operator", "/")}
            />
          </View>

          {/* Number */}
          <View style={styles.div}>
            <Button value="7" theme="number" handlePress={() => this.HandleTap("number", 7)} />
            <Button value="8" theme="number" handlePress={() => this.HandleTap("number", 8)} />
            <Button value="9" theme="number" handlePress={() => this.HandleTap("number", 9)} />
            <Button
              value="X"
              theme="primary"
              handlePress={() => this.HandleTap("operator", "*")}
            />
          </View>

          <View style={styles.div}>
            <Button value="4" theme="number" handlePress={() => this.HandleTap("number", 4)} />
            <Button value="5" theme="number" handlePress={() => this.HandleTap("number", 5)} />
            <Button value="6" theme="number" handlePress={() => this.HandleTap("number", 6)} />
            <Button
              value="-"
              theme="primary"
              handlePress={() => this.HandleTap("operator", "-")}
            />
          </View>

          <View style={styles.div}>
            <Button value="1" theme="number" handlePress={() => this.HandleTap("number", 1)} />
            <Button value="2" theme="number" handlePress={() => this.HandleTap("number", 2)} />
            <Button value="3" theme="number" handlePress={() => this.HandleTap("number", 3)} />
            <Button
              value="+"
              theme="primary"
              handlePress={() => this.HandleTap("operator", "+")}
            />
          </View>

          <View style={styles.div}>
            <Button value="0" theme="number" handlePress={() => this.HandleTap("number", 0)} />
            <Button value="." theme="number" handlePress={() => this.HandleTap("number", ".")} />
            <Button
              value="="
              theme="secondary"
              handlePress={() => this.HandleTap("equal", "=")}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcffe7",
    justifyContent: "center",

  },
  div: {
    flexDirection: "row",
  },
  
  value: {
    color: '#2b3467',
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  
  
});


