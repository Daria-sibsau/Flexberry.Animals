package Animals.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Animals.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Burrow
 */
@Entity(name = "IISAnimalsBurrow")
@Table(schema = "public", name = "Burrow")
public class Burrow {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Name")
    private String name;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Forest")
    @Convert("Forest")
    @Column(name = "Forest", length = 16, unique = true, nullable = false)
    private UUID _forestid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Forest", insertable = false, updatable = false)
    private Forest forest;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Animal")
    @Convert("Animal")
    @Column(name = "Animal", length = 16, unique = true, nullable = false)
    private UUID _animalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Animal", insertable = false, updatable = false)
    private Animal animal;


    public Burrow() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }


}